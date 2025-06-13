enum BikeCanvasState {
    Bike,
    ExplodedBike,
    Frame,
    Forks,
    Handlebars,
    Headset,
    Stem,
    Seat,
    Brakes,
    Wheel,
    Drivetrain,
    ExplodedDrivetrain,
    Cassette,
    Chain,
    Chainring,
    Crank,
    Derailleur,
    DerailleurHanger,
    Pedal,
    Transition,
}

type IconGroup = {
    children: (IconGroup | HTMLImageElement)[]
    offset: (state: BikeCanvasState) => [number, number]
    invisible?: (state: BikeCanvasState) => Boolean
    label?: (state: BikeCanvasState) => string | undefined
};

type Images = {
    buttonPressed: HTMLImageElement,
    buttonUnpressed: HTMLImageElement,
    backButtonPressed: HTMLImageElement,
    frame: HTMLImageElement,
    forks: HTMLImageElement,
    seat: HTMLImageElement,
    stem: HTMLImageElement,
    handlebars: HTMLImageElement,
    headset: HTMLImageElement,
    frontBrake: HTMLImageElement,
    wheel: HTMLImageElement,
    chainring: HTMLImageElement,
    cassette: HTMLImageElement,
    chain: HTMLImageElement,
    derailleur: HTMLImageElement,
    derailleurHanger: HTMLImageElement,
    crank: HTMLImageElement,
    pedal: HTMLImageElement,
}

// Linear interpolation. Later, we can transform progress to use different interpolations.
function interpolate(start: number, end: number, progress: number) {
    return start * (1 - progress) + end * progress
}

function clearCanvas(context: CanvasRenderingContext2D) {
    // Temporary white canvas for visibility, replace with transparent background
    // and use page styles 
    context.fillStyle = "white"
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}

const animationTimeMillis = 2000

function transition(
    ctx: CanvasRenderingContext2D,
    icons: IconGroup, 
    startState: BikeCanvasState, 
    endState: BikeCanvasState,
    animationComplete: (newState: BikeCanvasState) => void,
) {
    let startTime: DOMHighResTimeStamp
    function step(timestamp: DOMHighResTimeStamp) {
        if (startTime === undefined) {
            startTime = timestamp
        }
        const elapsed = timestamp - startTime
        const progress = Math.min(1, elapsed / animationTimeMillis)
        clearCanvas(ctx)
        drawIconGroup(ctx, icons, startState, endState, progress)
        if (progress < 1) {
            requestAnimationFrame(step)
        } else {
            animationComplete(endState)
        }
    }
    requestAnimationFrame(step)
}

function drawIconGroup(
    ctx: CanvasRenderingContext2D,
    group: IconGroup,
    startState: BikeCanvasState,
    endState: BikeCanvasState,
    progress: number,
    [x, y]: [number, number] = [0, 0]
) {
    const invisible = group.invisible ? group.invisible(endState) : false
    if (invisible) return

    const [startX, startY] = group.offset(startState)
    const [endX, endY] = group.offset(endState)
    const [px, py] = [interpolate(startX, endX, progress), interpolate(startY, endY, progress)]
    const offset: [number, number] = [x + px, y + py]
    for (let child of group.children) {
        if (child instanceof HTMLImageElement) {
            drawImg(ctx, child, offset)
        } else {
            drawIconGroup(ctx, child, startState, endState, progress, offset)
        }
    }
}

function drawImg(ctx: CanvasRenderingContext2D, img: HTMLImageElement, [dx, dy]: [number, number]) {
    ctx.drawImage(img, dx, dy)
}

function getLabel(rgb: [number, number, number]) {
    // This should match the mappings we did in image_processing/colour_map.py
    // Unfortunately I realized too late that openCV uses BGR which messed everything up
    // which is why the paramters here are out of order
    function eq([r1, g1, b1]: [number, number, number], [b2, g2, r2]: [number, number, number]) {
        return r1 === r2 && g1 === g2 && b1 === b2
    }

    if(eq(rgb, [0, 0, 209]) || eq(rgb, [165, 165, 165]) || eq(rgb, [2, 3, 2])) return "explode"
    if(eq(rgb, [209, 0, 0]) || eq(rgb, [166, 166, 166]) || eq(rgb, [2, 3, 3])) return "back"
    
    if(eq(rgb, [0, 0, 1]) || eq(rgb, [255, 255, 254])) return "frame"
    if(eq(rgb, [0, 1, 0]) || eq(rgb, [255, 254, 255])) return "fork" 
    if(eq(rgb, [0, 1, 1]) || eq(rgb, [255, 254, 254])) return "seat" 
    if(eq(rgb, [1, 0, 0]) || eq(rgb, [254, 255, 255])) return "stem" 
    if(eq(rgb, [1, 0, 1]) || eq(rgb, [254, 255, 254])) return "handlebars"
    if(eq(rgb, [1, 1, 0]) || eq(rgb, [254, 254, 255])) return "headset" 
    if(eq(rgb, [1, 1, 1]) || eq(rgb, [254, 254, 254])) return "brake"
    if(eq(rgb, [1, 1, 2]) || eq(rgb, [254, 254, 253])) return "wheel" 
    if(eq(rgb, [1, 2, 1]) || eq(rgb, [254, 253, 254])) return "chainring"
    if(eq(rgb, [1, 2, 2]) || eq(rgb, [254, 253, 253])) return "cassette"
    if(eq(rgb, [2, 1, 1]) || eq(rgb, [253, 254, 254])) return "chain"
    if(eq(rgb, [2, 1, 2]) || eq(rgb, [253, 254, 253])) return "derailleur"
    if(eq(rgb, [2, 2, 1]) || eq(rgb, [253, 253, 254])) return "derailleur_hanger"
    if(eq(rgb, [2, 2, 2]) || eq(rgb, [253, 253, 253])) return "crank"
    if(eq(rgb, [2, 2, 3]) || eq(rgb, [253, 253, 252])) return "pedal" 
        
    return undefined
}

function createShapes(images: Images): IconGroup {
    // Buttons
    const buttonUnpressed: IconGroup = {
        children: [images.buttonUnpressed],
        invisible: (state) => state === BikeCanvasState.ExplodedBike,
        offset: (state) => [0, 0]
    }
    const buttonPressed: IconGroup = {
        children: [images.buttonPressed],
        invisible: (state) => state !== BikeCanvasState.ExplodedBike,
        offset: () => [2, 30]
    }
    const explodeButtons: IconGroup = {
        children: [buttonPressed, buttonUnpressed],
        offset: () => [50, 600]
    }
    const backButton: IconGroup = {
        children: [images.backButtonPressed],
        offset: () => [52, 30]
    }

    // Bike
    const frame: IconGroup = {
        children: [images.frame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 0]
                case BikeCanvasState.ExplodedBike: return [-100, 0]
                case BikeCanvasState.Frame: return [100, 50]
                default: return [-1000, 200]
            }
        }
    }

    const forks: IconGroup = {
        children: [images.forks],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [590, 0]
                case BikeCanvasState.ExplodedBike: return [530, 200]
                default: return [690, 550]
            }
        }
    }

    const seat: IconGroup = {
        children: [images.seat],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [206, -95]
                case BikeCanvasState.ExplodedBike: return [91, -195]
                default: return [45, -350]
            }
        }
    }

    const stem: IconGroup = {
        children: [images.stem],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [575, -30]
                case BikeCanvasState.ExplodedBike: return [595, -30]
                default: return [750, -300]
            }
        }
    }

    const handlebars: IconGroup = {
        children: [images.handlebars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [660, -120]
                case BikeCanvasState.ExplodedBike: return [780, -120]
                default: return [1200, -120]
            }
        }
    }

    const headset: IconGroup = {
        children: [images.headset],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [585, -20]
                case BikeCanvasState.ExplodedBike: return [465, -120]
                default: return [400, -320]
            }
        }
    }

    const frontBrake: IconGroup = {
        children: [images.frontBrake],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [640, 130]
                case BikeCanvasState.ExplodedBike: return [640, 160]
                default: return [1200, 190]
            }
        }
    }

    const frontWheel: IconGroup = {
        children: [images.wheel],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [540, 155]
                case BikeCanvasState.ExplodedBike: return [740, 255]
                default: return [1200, 255]
            }
        }
    }

    const rearWheel: IconGroup = {
        children: [images.wheel],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [-100, 155]
                case BikeCanvasState.ExplodedBike: return [-200, -85]
                default: return [-550, -65]
            }
        }
    }

    // Drivetrain
    const chainring: IconGroup = {
        children: [images.chainring],
        offset: (state) => {
            switch (state) {
                default: return [250, 15]
            }
        }
    }
    const cassette: IconGroup = {
        children: [images.cassette],
        offset: (state) => {
            switch (state) {
                default: return [0, 35]
            }
        }
    }
    const chain: IconGroup = {
        children: [images.chain],
        offset: (state) => {
            switch (state) {
                default: return [0, 0]
            }
        }
    }
    const derailleur: IconGroup = {
        children: [images.derailleur],
        offset: (state) => {
            switch (state) {
                default: return [28, 80]
            }
        }
    }
    const derailleurHanger: IconGroup = {
        children: [images.derailleurHanger],
        offset: (state) => {
            switch (state) {
                default: return [40, 64]
            }
        }
    }
    const leftCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                default: return [300, -35]
            }
        }
    }
    const rightCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                default: return [230, 80]
            }
        }
    }
    const leftPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                default: return [350, -35]
            }
        }
    }
    const rightPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                default: return [218, 199]
            }
        }
    }

    const drivetrain: IconGroup = {
        children: [leftPedal, leftCrank, cassette, chainring, chain, derailleur, derailleurHanger, rightCrank, rightPedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [-20, 170]
                case BikeCanvasState.ExplodedBike: return [0, 280]
                default: return [0, 575]
            }
        }
    }

    const bike: IconGroup = {
        children: [rearWheel, frontWheel, forks, seat, frame, stem, handlebars, headset, frontBrake, drivetrain],
        offset: () => [270, 200]
    }

    const root: IconGroup = {
        children: [explodeButtons, backButton, bike],
        offset: () => [0, 0],
    }

    return root
}

function nextState(state: BikeCanvasState, label: string): BikeCanvasState {
    if (label === "explode") {
        if (state === BikeCanvasState.Bike) return BikeCanvasState.ExplodedBike
        if (state === BikeCanvasState.ExplodedBike) return BikeCanvasState.Bike
        if (state === BikeCanvasState.Drivetrain) return BikeCanvasState.ExplodedDrivetrain
        if (state === BikeCanvasState.ExplodedDrivetrain) return BikeCanvasState.Drivetrain
    }

    const startStates = [BikeCanvasState.Bike, BikeCanvasState.ExplodedBike]
    const drivetrainLabels = ["cassette", "chain", "chainring", "crank", "derailleur", "derailleur_hanger", "pedal"]
    if (startStates.indexOf(state) !== -1) {
        if (drivetrainLabels.indexOf(label) !== -1) return BikeCanvasState.Drivetrain
        if (label === "frame") return BikeCanvasState.Frame
        if (label === "forks") return BikeCanvasState.Forks
        if (label === "stem") return BikeCanvasState.Stem
        if (label === "seat") return BikeCanvasState.Seat
        if (label === "brake") return BikeCanvasState.Brakes
        if (label === "headset") return BikeCanvasState.Headset
        if (label === "wheel") return BikeCanvasState.Wheel
    }

    const drivetrainStates = [BikeCanvasState.Drivetrain, BikeCanvasState.ExplodedDrivetrain]
    if (drivetrainStates.indexOf(state) !== -1) {
        if (label === "cassette") return BikeCanvasState.Cassette
        if (label === "chain") return BikeCanvasState.Chain
        if (label === "chainring") return BikeCanvasState.Chainring
        if (label === "crank") return BikeCanvasState.Crank
        if (label === "derailleur") return BikeCanvasState.Derailleur
        if (label === "derailleur_hanger") return BikeCanvasState.DerailleurHanger
        if (label === "pedal") return BikeCanvasState.Pedal
    }

    return undefined
}

function init(images: Images) {
    const canvas = document.getElementById("bike_canvas") as HTMLCanvasElement
    if (canvas === null) {
        console.error("Couldn't find bike canvas")
        return
    }

    const context = canvas.getContext("2d")
    if (context === null) {
        console.error("Couldn't get rendering context")
        return
    }

    const root = createShapes(images)

    const initialState = BikeCanvasState.Bike
    const state = [initialState]
    let inTransition = false
    const animationComplete = (newState: BikeCanvasState) => {
        state.push(newState)
        inTransition = false
    }
    canvas.addEventListener("click", ev => {
        if (inTransition) return

        const bounding = canvas.getBoundingClientRect();
        const x = ev.clientX - bounding.left;
        const y = ev.clientY - bounding.top;

        const pixel = context.getImageData(x, y, 1, 1);
        const data = pixel.data;

        const labelText = getLabel([data[0], data[1], data[2]]);
        if (labelText === undefined) return

        // If label is button, then replace the top of the stack with the new state
        // e.g. replace Bike with ExplodedBike
        // Hide the button whenever we aren't in an exploding state

        // If label is back, then pop the top of the stack

        // Otherwise, push onto the stack
        let startState: BikeCanvasState
        let endState: BikeCanvasState

        if (labelText === "explode") {
            startState = state.pop()
            endState = nextState(startState, labelText)
            if (endState === undefined) {
                state.push(startState)
                console.error(`Could not find a way to explode from state ${startState}`)
            }
        } else if (labelText === "back" && state.length >= 2) {
            if (state.length < 2) {
                console.error(`Could not find a way back (stack: ${JSON.stringify(state)})`)
            } else {
                startState = state.pop()
                endState = state.pop()
            }
        } else {
            startState = state[state.length - 1]
            endState = nextState(startState, labelText)
        }

        if (endState !== undefined) {
            inTransition = true
            transition(context, root, startState, endState, animationComplete)
        }
    })

    const label = document.getElementById("label")
    canvas.addEventListener("mousemove", ev => {
        const bounding = canvas.getBoundingClientRect();
        const x = ev.clientX - bounding.left;
        const y = ev.clientY - bounding.top;

        const pixel = context.getImageData(x, y, 1, 1);
        const data = pixel.data;

        const labelText = getLabel([data[0], data[1], data[2]]);
        label.textContent = labelText;
    })

    clearCanvas(context)
    
    drawIconGroup(context, root, initialState, initialState, 0)
}

function loadImage(
    src: string
) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.addEventListener("load", () => resolve(img))
        img.src = src
    })
}

// Load the images and then call the main function
Promise.all([
    loadImage("/icons/button_pressed.png"),
    loadImage("/icons/button_unpressed.png"),
    loadImage("/icons/back.png"),
    loadImage("/bike/frame.png"),
    loadImage("/bike/fork.png"),
    loadImage("/bike/seat.png"),
    loadImage("/bike/stem.png"),
    loadImage("/bike/handlebars.png"),
    loadImage("/bike/headset.png"),
    loadImage("/bike/brake.png"),
    loadImage("/bike/wheel.png"),
    loadImage("/bike/chainring.png"),
    loadImage("/bike/cassette.png"),
    loadImage("/bike/chain.png"),
    loadImage("/bike/derailleur.png"),
    loadImage("/bike/derailleur_hanger.png"),
    loadImage("/bike/crank.png"),
    loadImage("/bike/pedal.png"),
]).then(([
    buttonPressed,
    buttonUnpressed,
    backButtonPressed,
    frame,
    forks,
    seat,
    stem,
    handlebars,
    headset,
    frontBrake,
    wheel,
    chainring,
    cassette,
    chain,
    derailleur,
    derailleurHanger,
    crank,
    pedal,
]) => {
    init({
        buttonPressed,
        buttonUnpressed,
        backButtonPressed,
        frame,
        forks,
        seat,
        stem,
        handlebars,
        headset,
        frontBrake,
        wheel,
        chainring,
        cassette,
        chain,
        derailleur,
        derailleurHanger,
        crank,
        pedal,
    })
})

// Back button + state stack
// Info button + descriptions for each state + exit button
// Screen scaling for desktop
// Screen scaling for mobile
// Handwritten labels
// Colour picker for frame
