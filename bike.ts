// Descriptions
const BRAKE_DESCRIPTION = `
Even though the point of riding bikes is to go fast, you can't always do that. Sometimes other road users get in your way. Sometimes physical obstacles get in your way. In rare circumstances, you may simply feel that you are going faster than you'd like and wish you weren't.

Brakes solve the problem of having a fast thing that you want to go less fast. There are many ways that bikes achieve this which all involve applying friction to a moving part to slow it down.

Rim brakes work by squeezing two pads against the rim of the wheel. The friction between the rim and the pads slows down the rotation of the wheel enough to come to a stop.

Disc brakes work by squeezing two pads against a disc-shaped rotor attached near the hub of the wheel. Again, friction between the two slows the rotation of the wheel.

Which of these two major braking systems you use is dictated by your frame, your forks, and your wheels, and all need to match. Each system applies a very different set of forces to the components, so each one is specifically designed for those forces and converting between them is both difficult to do and a very bad idea.
`;

// States
enum BikeCanvasState {
    Bike,
    ExplodedBike,
    Frame,
    Fork,
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
}

const info: Record<BikeCanvasState, string> = {
    [BikeCanvasState.Bike]: undefined,
    [BikeCanvasState.ExplodedBike]: undefined,
    [BikeCanvasState.Frame]: "This is the frame.",
    [BikeCanvasState.Fork]: "This is the fork.",
    [BikeCanvasState.Handlebars]: "These are the handlebars.",
    [BikeCanvasState.Headset]: "This is the headset.",
    [BikeCanvasState.Stem]: "This is the stem.",
    [BikeCanvasState.Seat]: "This is the seat.",
    [BikeCanvasState.Brakes]: BRAKE_DESCRIPTION,
    [BikeCanvasState.Wheel]: "This is a wheel.",
    [BikeCanvasState.Drivetrain]: "This is the drivetrain.",
    [BikeCanvasState.ExplodedDrivetrain]: undefined,
    [BikeCanvasState.Cassette]: "This is the cassette.",
    [BikeCanvasState.Chain]: "This is the chain.",
    [BikeCanvasState.Chainring]: "This is the chainring.",
    [BikeCanvasState.Crank]: "This is the crank.",
    [BikeCanvasState.Derailleur]: "This is the derailleur.",
    [BikeCanvasState.DerailleurHanger]: "This is the derailleur hanger",
    [BikeCanvasState.Pedal]: "This is the pedal.",
}

type IconGroup = {
    children: (IconGroup | HTMLImageElement)[]
    offset: (state: BikeCanvasState) => [number, number]
    invisible?: (state: BikeCanvasState, progress: number) => Boolean
    label?: (state: BikeCanvasState) => string | undefined
};

type Images = {
    buttonPressed: HTMLImageElement,
    buttonUnpressed: HTMLImageElement,
    backButtonPressed: HTMLImageElement,
    frame: HTMLImageElement,
    fork: HTMLImageElement,
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
    const invisible = group.invisible ? group.invisible(endState, progress) : false
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

const lineHeight = 24
const cpm = 2400
const writeAfterMillis = 1000 * 60 / cpm
let infoFrame: number
function drawInfo(ctx: CanvasRenderingContext2D, state: BikeCanvasState) {
    const textSize = 24
    const lineHeight = 24
    const margin = 36
    const startX = 700
    const width = ctx.canvas.width - startX - margin

    const text = info[state]
    if (text === undefined) return
    const lines: string[] = [""]

    let marker = 0
    let lastWrite: DOMHighResTimeStamp
    function drawLastLine(timestamp: DOMHighResTimeStamp) {
        if (marker >= text.length) return

        // if we haven't waited long enough since the last write, retrigger
        if (lastWrite !== undefined && timestamp - lastWrite < writeAfterMillis) {
            infoFrame = requestAnimationFrame(drawLastLine)
            return
        } 
        lastWrite = timestamp
        
        if (text[marker] === '\n') {
            lines.push("")
        } else if (text[marker] === " ") {
            let nextWs = marker + 1
            while (nextWs < text.length && text[nextWs] !== ' ' && text[nextWs] !== '\n') {
                nextWs++
            }
            const wordPadded = text.slice(marker, nextWs)
            // console.log(wordPadded)
            // console.log(ctx.measureText(lines[lines.length - 1] + wordPadded))
            // console.log(width)
            if (ctx.measureText(lines[lines.length - 1] + wordPadded).width < width) {
                lines[lines.length - 1] += ' '
            } else {
                lines.push("")
            }
        } else {
            lines[lines.length - 1] += text[marker]
        }
        
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.fillRect(startX, 0, width, ctx.canvas.height)
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.font = `${textSize}px monospace`
        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(
                lines[i], 
                // Always start from the left baseline
                startX, 
                // Write the line in the vertical position corresponding to its number
                margin + lineHeight * i
            )
        }

        marker++

        infoFrame = requestAnimationFrame(drawLastLine)
    }

    infoFrame = requestAnimationFrame(drawLastLine)
}

function getLabel(rgb: [number, number, number]) {
    // This should match the mappings we did in image_processing/colour_map.py
    // Unfortunately I realized too late that openCV uses BGR which messed everything up
    // which is why the paramters here are out of order
    function eq([r1, g1, b1]: [number, number, number], [b2, g2, r2]: [number, number, number]) {
        return r1 === r2 && g1 === g2 && b1 === b2
    }

    if(eq(rgb, [0, 0, 209]) || eq(rgb, [165, 165, 165]) || eq(rgb, [2, 3, 2])) return "explode"
    if(eq(rgb, [0, 209, 0]) || eq(rgb, [166, 166, 166]) || eq(rgb, [2, 3, 3])) return "back"
    
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

const startStates = [BikeCanvasState.Bike, BikeCanvasState.ExplodedBike]
const explodingStates = [
    BikeCanvasState.Bike,
    BikeCanvasState.ExplodedBike,
    BikeCanvasState.Drivetrain,
    BikeCanvasState.ExplodedDrivetrain,
]
function createShapes(images: Images): IconGroup {
    // Buttons
    const buttonUnpressed: IconGroup = {
        children: [images.buttonUnpressed],
        invisible: (_, progress) => progress < 0.99,
        offset: (state) => [0, 0]
    }
    const buttonPressed: IconGroup = {
        children: [images.buttonPressed],
        invisible: (_, progress) => progress >= 0.99,
        offset: () => [2, 30]
    }
    const explodeButtons: IconGroup = {
        children: [buttonPressed, buttonUnpressed],
        invisible: (state) => explodingStates.indexOf(state) === -1,
        offset: () => [50, 600]
    }
    const backButton: IconGroup = {
        children: [images.backButtonPressed],
        invisible: (state) => startStates.indexOf(state) !== -1,
        offset: () => [52, 30]
    }

    // Bike
    const frame: IconGroup = {
        children: [images.frame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 0]
                case BikeCanvasState.ExplodedBike: return [-100, 0]
                case BikeCanvasState.Frame: return [-270, -200]
                default: return [-1000, 200]
            }
        }
    }

    const fork: IconGroup = {
        children: [images.fork],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [590, 0]
                case BikeCanvasState.ExplodedBike: return [530, 200]
                case BikeCanvasState.Fork: return [-270, 0]
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
                case BikeCanvasState.Seat: return [-270, 0]
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
                case BikeCanvasState.Stem: return [-270, 0]
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
                case BikeCanvasState.Handlebars: return [-270, 0]
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
                case BikeCanvasState.Headset: return [-270, 0]
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
                case BikeCanvasState.Brakes: return [-270, 0]
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
                case BikeCanvasState.Wheel: return [-100, -200]
                default: return [-550, -65]
            }
        }
    }

    // Drivetrain
    const chainring: IconGroup = {
        children: [images.chainring],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Chainring: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [250, -150]
                default: return [250, 15]
            }
        }
    }
    const cassette: IconGroup = {
        children: [images.cassette],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Cassette: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [0, -120]
                default: return [0, 35]
            }
        }
    }
    const chain: IconGroup = {
        children: [images.chain],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Chain: return [-270, -575]
                default: return [0, 0]
            }
        }
    }
    const derailleur: IconGroup = {
        children: [images.derailleur],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Derailleur: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [120, 55]
                default: return [28, 80]
            }
        }
    }
    const derailleurHanger: IconGroup = {
        children: [images.derailleurHanger],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.DerailleurHanger: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [270, 60]
                default: return [40, 64]
            }
        }
    }
    const leftCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.ExplodedDrivetrain: return [100, 180]
                default: return [300, -35]
            }
        }
    }
    const rightCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Crank: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [100, 180]
                default: return [230, 80]
            }
        }
    }
    const leftPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.ExplodedDrivetrain: return [225, 210]
                default: return [350, -35]
            }
        }
    }
    const rightPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Pedal: return [-270, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [225, 210]
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
                case BikeCanvasState.Drivetrain: return [-100, 0]
                case BikeCanvasState.ExplodedDrivetrain: return [-100, 0]
                default: return [0, 575]
            }
        }
    }

    const bike: IconGroup = {
        children: [rearWheel, frontWheel, fork, seat, frame, stem, handlebars, headset, frontBrake, drivetrain],
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

    const drivetrainLabels = ["cassette", "chain", "chainring", "crank", "derailleur", "derailleur_hanger", "pedal"]
    if (startStates.indexOf(state) !== -1) {
        if (drivetrainLabels.indexOf(label) !== -1) return BikeCanvasState.Drivetrain
        if (label === "frame") return BikeCanvasState.Frame
        if (label === "fork") return BikeCanvasState.Fork
        if (label === "stem") return BikeCanvasState.Stem
        if (label === "seat") return BikeCanvasState.Seat
        if (label === "brake") return BikeCanvasState.Brakes
        if (label === "headset") return BikeCanvasState.Headset
        if (label === "wheel") return BikeCanvasState.Wheel
        if (label === "handlebars") return BikeCanvasState.Handlebars
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
        drawInfo(context, newState)
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
            cancelAnimationFrame(infoFrame)
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
    
    drawIconGroup(context, root, initialState, initialState, 1)
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
    fork,
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
        fork,
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
