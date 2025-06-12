enum BikeCanvasState {
    Bike,
    ExplodedBike,
    DriveTrain,
    ExplodedDriveTrain,
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

    if(eq(rgb, [0, 0, 209]) || eq(rgb, [165, 165, 165]) || eq(rgb, [10, 10, 10])) return "button"
    
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
        
    return ""
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
        offset: (state) => [2, 30]
    }
    const buttons: IconGroup = {
        children: [buttonPressed, buttonUnpressed],
        offset: (state) => [50, 600]
    }

    // Bike
    const frame: IconGroup = {
        children: [images.frame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 0]
                case BikeCanvasState.ExplodedBike: return [-100, 0]
                default: return [0, 0]
            }
        }
    }

    const forks: IconGroup = {
        children: [images.forks],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [590, 0]
                case BikeCanvasState.ExplodedBike: return [530, 200]
                default: return [0, 0]
            }
        }
    }

    const seat: IconGroup = {
        children: [images.seat],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [206, -95]
                case BikeCanvasState.ExplodedBike: return [91, -195]
                default: return [0, 0]
            }
        }
    }

    const stem: IconGroup = {
        children: [images.stem],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [575, -30]
                case BikeCanvasState.ExplodedBike: return [595, -30]
                default: return [0, 0]
            }
        }
    }

    const handlebars: IconGroup = {
        children: [images.handlebars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [660, -120]
                case BikeCanvasState.ExplodedBike: return [780, -120]
                default: return [0, 0]
            }
        }
    }

    const headset: IconGroup = {
        children: [images.headset],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [585, -20]
                case BikeCanvasState.ExplodedBike: return [465, -120]
                default: return [0, 0]
            }
        }
    }

    const frontBrake: IconGroup = {
        children: [images.frontBrake],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [640, 130]
                case BikeCanvasState.ExplodedBike: return [640, 160]
                default: return [0, 0]
            }
        }
    }

    const frontWheel: IconGroup = {
        children: [images.wheel],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [540, 155]
                case BikeCanvasState.ExplodedBike: return [740, 255]
                default: return [0, 0]
            }
        }
    }

    const rearWheel: IconGroup = {
        children: [images.wheel],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [-100, 155]
                case BikeCanvasState.ExplodedBike: return [-200, -105]
                default: return [0, 0]
            }
        }
    }

    // Drivetrain
    const chainring: IconGroup = {
        children: [images.chainring],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [250, 15]
                case BikeCanvasState.ExplodedBike: return [250, 15]
                default: return [0, 0]
            }
        }
    }
    const cassette: IconGroup = {
        children: [images.cassette],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 35]
                case BikeCanvasState.ExplodedBike: return [0, 35]
                default: return [0, 0]
            }
        }
    }
    const chain: IconGroup = {
        children: [images.chain],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 0]
                case BikeCanvasState.ExplodedBike: return [0, 0]
                default: return [0, 0]
            }
        }
    }
    const derailleur: IconGroup = {
        children: [images.derailleur],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [28, 80]
                case BikeCanvasState.ExplodedBike: return [28, 80]
                default: return [0, 0]
            }
        }
    }
    const derailleurHanger: IconGroup = {
        children: [images.derailleurHanger],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [40, 64]
                case BikeCanvasState.ExplodedBike: return [40, 64]
                default: return [0, 0]
            }
        }
    }
    const leftCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [300, -35]
                case BikeCanvasState.ExplodedBike: return [300, -35]
                default: return [0, 0]
            }
        }
    }
    const rightCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [230, 80]
                case BikeCanvasState.ExplodedBike: return [230, 80]
                default: return [0, 0]
            }
        }
    }
    const leftPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [350, -35]
                case BikeCanvasState.ExplodedBike: return [350, -35]
                default: return [0, 0]
            }
        }
    }
    const rightPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [218, 199]
                case BikeCanvasState.ExplodedBike: return [218, 199]
                default: return [0, 0]
            }
        }
    }

    const drivetrain: IconGroup = {
        children: [leftPedal, leftCrank, cassette, chainring, chain, derailleur, derailleurHanger, rightCrank, rightPedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [-20, 170]
                case BikeCanvasState.ExplodedBike: return [0, 280]
                default: return [0, 0]
            }
        }
    }

    const bike: IconGroup = {
        children: [rearWheel, frontWheel, forks, seat, frame, stem, handlebars, headset, frontBrake, drivetrain],
        offset: (state) => [270, 200]
    }

    const root: IconGroup = {
        children: [buttons, bike],
        offset: (state) => [0, 0],
    }

    return root
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

    let state = BikeCanvasState.Bike
    // Create map from canvas pixel to label 
    // Scale events from canvas real size to canvas ideal size
    // Add click actions to do state transitions based on state and label clicked
    // On animationComplete, recompute labels as well
    const animationComplete = (newState: BikeCanvasState) => {
        state = newState
    }
    canvas.addEventListener("click", ev => {
        if (state === BikeCanvasState.Transition) return

        const bounding = canvas.getBoundingClientRect();
        const x = ev.clientX - bounding.left;
        const y = ev.clientY - bounding.top;

        const pixel = context.getImageData(x, y, 1, 1);
        const data = pixel.data;

        // Later, convert this to a state machine based on the state and label clicked
        // For now, just explode/implode when the button is pressed
        const labelText = getLabel([data[0], data[1], data[2]]);
        if (labelText !== "button") return;

        const startState = state
        state = BikeCanvasState.Transition
        
        if (startState === BikeCanvasState.Bike) {
            transition(context, root, startState, BikeCanvasState.ExplodedBike, animationComplete)
        } else if (startState === BikeCanvasState.ExplodedBike) {
            transition(context, root, startState, BikeCanvasState.Bike, animationComplete)
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
    drawIconGroup(context, root, state, state, 0)
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
