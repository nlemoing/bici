// Descriptions
const BRAKE_DESCRIPTION = `
Even though the point of riding bikes is to go fast, you can't always do that. Sometimes other road users get in your way. Sometimes physical obstacles get in your way. In rare circumstances, you may simply feel that you are going faster than you'd like and wish you weren't.

Brakes solve the problem of having a fast thing that you want to go less fast. There are many ways that bikes achieve this which all involve applying friction to a moving part to slow it down.

Rim brakes work by squeezing two pads against the rim of the wheel. The friction between the rim and the pads slows down the rotation of the wheel enough to come to a stop.

Disc brakes work by squeezing two pads against a disc-shaped rotor attached near the hub of the wheel. Again, friction between the two slows the rotation of the wheel.`;

const RIM_BRAKE_DESCRIPTION = `
Rim brakes are the simpler of the two braking systems: they have fewer components, tend to weigh less, and are easy to maintain. As a result, they tend to be the standard on kids bikes and entry-level road bikes.

Because rim brakes frequently pair with a quick-release front axle, they can also make it slightly easier to take the wheel on and off.

However, as a general rule, they don't provide as much stopping power, especially in wet weather or on descents.`;

const RIM_PAD_DESCRIPTION = `
The rubber on pads wears away over time. There might be a line on the pad to indicate the maximum wear. 

When replacing pads, you should find a pad with the same attachment type as your current pads. The thing to look for is whether the pad fastens with a nut (and if so, what kind) or has a post that gets clamped by part of the caliper arm.

Some pads come in one-piece style while others have removable cartridges that fit into the brake shoe and are changed independently.

For bikes with carbon wheels, the brake pad material has to be a carbon-specific material in order to get purchase on the braking surface.`;

const DISC_BRAKE_DESCRIPTION = `
Disc brakes provide more stopping power than rim brakes, but at the cost of complexity: more can go wrong when it comes to adjustments and maintenance.

The braking surface for disc brakes isn't limited by the width of the rim, so pads for disc brakes tend to be larger and allow for more grip.

Disc brakes also have the additional option of a hydraulic setup instead of a cable-driven setup. This generally provides better brake feel and doesn't require as much adjustment. However, it introduces the possibility of an air bubble getting into the hydraulics and killing performance. The only fix for this is a brake bleed (removing and replacing the fluid).

Disc brakes can become contaminated if oil gets in them. This manifests as black residue on the rotor and brake noise. If this happens you have to swap both the pads and the rotors at the same time, otherwise the contamination will get into the new pads and re-contaminate the disc. Contaminated rotors can be cleaned, but it's not a guaranteed fix.`

const DISC_PAD_DESCRIPTION = `
Disc pads come in several different shapes that are specific to the manufacterer and model of brake.

Pads also come in different materials. Organic, or resin, pads tend to be quieter and don't need to warm up, but they do wear away more quickly.

Metal pads are louder but last longer and tend to perform better in wet weather, though they do work best once they've warmed up.`;

const DISC_ROTOR_DESCRIPTION = `
Rotors are the piece of metal that disc brake pads clamp down on; they are attached to the wheels so that the friction from the pads slows down the rotor rotation (and hence, the wheel rotation).

Rotors come in several different diameters with larger rotors offering more stopping power at the cost of weight. Road bikes can use smaller rotors than mountain bikes.

Rotors can be attached to the wheel via a 6-bolt system which uses Torx bolts or via a centre-lock system that requires a special tool.

Like pads, rotors wear out over time, though less quickly than pads. The manufacturer will have a minimum thickness recommendation that can be checked easily.`;

const DRIVETRAIN_DESCRIPTION = `
The drivetrain (also known as the groupset) is the name for the collection of components that makes the bike move.

Parts manufacturers (e.g. Shimano, SRAM) each have several sub-brands at different price points; more expensive means lighter, sharper shifting, and envy of fellow cyclists (but perhaps diminishing returns?). 

It's important that for each component of the drivetrain, the speeds and gearing is compatible; it's normally better to source each part of the drivetrain from the same manufacturer and brand.

Traditionally, shifting is done via a mechanical cable, though it's more common now on higher-end bikes to see electronic (wireless) shifting.

The drivetrain is always on the right hand side of the bike which is why the right hand side is called the "drive side".`;

const CHAIN_DESCRIPTION = `
The chain translates force from the crankset (pedals, cranks, chainring) to the rear wheel, allowing the bike to move.

It does so by interlocking with the teeth of the chainring and cassette; when the chainring rotates, so does the chain which causes the cassette to rotate.

Chains stretch and wear out over time which can cause gears to skip and can begin to damage the cassette if left too long.

Chains are sized specifically to the number of rear gears on a bike since the more rear gears there are, the closer they are together and the skinnier the chain must be. 

Chain are sold with more links than necessary because each bike requires a different length; when replacing a chain, it's easiest to use the old one as a reference.`

const CASSETTE_DESCRIPTION = `
The cassette is the cluster of rear gear cogs on a multi-speed bike.

The bigger the size ratio between the front and rear cogs, the more rotations the rear wheel will do for each pedal rotation, making the bike go faster but also making it harder to pedal.

It's attached to the freehub in the rear wheel via a lockring that needs a separate tool to install and remove.

It's common to have between 7 and 12 rear cogs. Adding more cogs gives more precise options for gear ratios but also makes the drivetrain more complicated since the tolerances for shifting are tighter, making 12-speed groupsets more expensive.

Cassettes are referred to by the number of teeth in the smallest and largest cog; an 11-34T cassette has 11 teeth on the smallest cog and 34 on the largest.`;

const CHAINRING_DESCRIPTION = `
Chainrings are the gear cogs attached directly to the cranks and pedals.

On road bikes, it's common to have two chainrings to allow for high speeds on flat sections, while on mountain bikes it's more common to have one chainring with huge cogs on the rear to make climbing easier.

Road bikes typically use 50-34 chainrings, meaning one ring with 50 teeth and another with 34, though there are other options: time-trial/triathlon bikes, for example, tend to have much bigger chainrings to allow for very fast riding on flat sections, while mountain bikes typically have a single 34 tooth chainring.`;

const DERAILLEUR_DESCRIPTION = `
The derailleur is connected to the shifter and is responsible for lining the chain up with the correct gear cog. Most derailleurs use a cable to connect to the shifters, but some high-end systems are electronically linked.

Rear derailleurs have a cage with two pulleys: the top one guides the chain onto the correct gear while the bottom one keeps tension in the chain. Front derailleurs have a metal cage that surrounds the chain and guides it into place.

Tension on the shift cable is what allows the derailleur to go into larger cogs. Without enough tension, it's very difficult to go into the largest cogs and some middle gears might skip or jump. 

Loosening the barrel adjuster on the shift cable adds cable tension and can be used for fine-tuning derailleur placement (also called indexing).

Derailleurs have limit screws which prevent them from going past the highest and lowest gears, meaning the chain won't jump off.`;

const DERAILLEUR_HANGER_DESCRIPTION = `
Because the derailleur tends to be an expensive and intricate part while also sitting in an exposed area of the bike, it's common to attach the derailleur via a derailleur hanger instead of directly to the frame.

The hanger is a cheaper, sacrificial part that will bend or break if force is applied to the derailleur, thereby saving the derailleur itself.

Hangers are frame-specific and replacement parts have to match exactly; finding the right replacement can be a challenge.`;

const PEDAL_DESCRIPTION = `
Pedals connect the drivetrain to the engine of the bike (you).

Pedals are attached to the cranks with either a 15mm spanner or a 6mm hex key.

The left pedal is threaded the opposite direction from the right one because otherwise, force from pedaling would unscrew it.

Entry-level bikes come with wide, flat pedals, but more expensive pedals that allow your feet to clip directly to the pedal can be swapped in.

For mountain biking, the standard cleat type is SPD while for road biking, the standard cleat type is SPD-SL (though Look offers an alternative standard called KEO).

If you want to spend a lot of money, you can even buy pedals with built-in power meters to tell you how hard you are working.`;

const CRANK_DESCRIPTION = `
Cranks are the arms that connect pedals to the chainrings.

Cranks come in a narrow range of lengths (165mm to 175mm) and generally these are scaled with the size of the frame to try to fit most people well.

Longer levers can produce more torque but are harder to spin at a high cadence, so there isn't any power output difference from different crank sizes; bike fit is the most important factor.

You can also buy cranks that double as a power meter if you want to know how much slower you are than the pros.`;

const FRAME_DESCRIPTION = `
The frame is the foundation of a bike: it's the most expensive part, affects the overall weight of the bike the most, and also sets the tone for compatibility with every other part.

New frames are usually aluminum alloy or carbon fibre, though some older bike frames were made of steel. Most brands have different tiers of carbon fibre at different price points and weights.

Frames dictate the type of brakes used, the wheel attachment, the fork diameter and attachment style, the seatpost size, and even the bottom bracket and cranks.

Frames are also the most important factor for bike fitting, though handlebars, stem length and saddle height are also very important.`

const FORK_DESCRIPTION = `
The forks hold the front wheel via a quick-release or through-axle and connect it to the rest of the bike via the headset.

Forks have two tines (which fit on either side of the wheel) and the steerer tube which fits inside the head tube of the frame.

Forks are where the front brakes are mounted. Rim brakes are bolted to the place where the tines start, while disc brakes can either be post-mounted or flat-mounted.

For mountain bikes, the forks also offer suspension on the front of the bike. Forks differ in the distance they can travel, ranging from 100mm for XC bikes to 200mm or more for downhill bikes.`;

const HEADSET_DESCRIPTION = `
The headset is the name for the collection of parts that integrates with the steering tube and head tube to allow the forks to turn smoothly.

They are specific to the shape and size of the steerer tube on the forks. The steerer tube is either straight (1.125" or 1.5") or tapered (top is 1.125", bottom is 1.5"), with tapered being more common on modern bikes.

Headsets may use sealed or loose ball bearings to facilitate turning; these bearings can come integrated with the head tube or as standalone components.

The crown race sits at the base of the steerer tube and interfaces with the bearings, allowing the fork to turn with them.`;

const STEM_DESCRIPTION = `
The stem attaches the forks to the handlebars and allows the pilot (you) to turn the front wheel.

Some basic bikes will use a quill stem which has a big steel bolt that screws into the forks. However, most stems on road and mountain bikes are threadless and clamp onto the steerer tube directly with spacers used to adjust handlebar height.

Mountain bike stems tend to be short (35 to 70mm) while road bike stems are longer (80 to 120mm) to accommodate the different riding positions.`

const HANDLEBAR_DESCRIPTION = `
Handlebars are used to hold onto the bike to prevent falling off, and also to steer.

The shifters and brakes are attached here so they're in easy reach when you need to prevent yourself from crashing into things.

Mountain bike handlebars tend to be very wide to help with steering. They have a universal diameter on either end which allows grips to be interchangeable.

Road handlebars are narrow and have two places to put your hands: the tops of the bars (hoods) are used for comfortable riding while the curved lower parts (drops) are used for aerodynamic riding.

Handlebars are attached to the forks via the stem. Handlebars commonly come in either 31.8 or 35mm diameters and the stem has to match.`

const SEAT_DESCRIPTION = `
The seat consists of the seatpost (the tube that goes into the seat tube on the frame) and the saddle (the flat bit for your bum).

The seatpost can have many different diameters, the most common ones being 27.2mm, 30.8mm, and 31.6mm. Some aero road bikes also use tapered seat tubes specific to the frame.

The seatpost attaches to the saddle by clamping onto two rails that are on the underside of the saddle.

This allows for the saddle to be adjusted forwards and backwards, while the seatpost can move up and down within the seat tube.`;

const WHEEL_DESCRIPTION = `
Wheels were the first part of the bicycle to be invented and predate the bicycle itself by some 6000 years.

Rims are defined by their diameter: on mountain bikes, 27.5" and 29" are common sizes (with smaller wheels on kids' bikes), while on road bikes, 700c is the prevailing standard with 650c being more common on gravel bikes.

Tires come in a range of thicknesses: 2" to 2.6" for mountain bikes, 23mm to 32mm for road bikes. Rims can accomodate a big range of widths but the frame is often the limiting factor since it can start to rub.

Tubes are inflated via either a Schraeder valve (also used on cars) or a Presta valve (also called a high-pressure valve or French valve).

Spokes are used to balance the forces on the wheel, keeping it round and preventing it from wobbling.`


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
    RimBrakes,
    DiscBrakes,
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
    [BikeCanvasState.Frame]: FRAME_DESCRIPTION,
    [BikeCanvasState.Fork]: FORK_DESCRIPTION,
    [BikeCanvasState.Handlebars]: HANDLEBAR_DESCRIPTION,
    [BikeCanvasState.Headset]: HEADSET_DESCRIPTION,
    [BikeCanvasState.Stem]: STEM_DESCRIPTION,
    [BikeCanvasState.Seat]: SEAT_DESCRIPTION,
    [BikeCanvasState.Brakes]: BRAKE_DESCRIPTION,
    [BikeCanvasState.RimBrakes]: RIM_BRAKE_DESCRIPTION,
    [BikeCanvasState.DiscBrakes]: DISC_BRAKE_DESCRIPTION,
    [BikeCanvasState.Wheel]: WHEEL_DESCRIPTION,
    [BikeCanvasState.Drivetrain]: DRIVETRAIN_DESCRIPTION,
    [BikeCanvasState.ExplodedDrivetrain]: undefined,
    [BikeCanvasState.Cassette]: CASSETTE_DESCRIPTION,
    [BikeCanvasState.Chain]: CHAIN_DESCRIPTION,
    [BikeCanvasState.Chainring]: CHAINRING_DESCRIPTION,
    [BikeCanvasState.Crank]: CRANK_DESCRIPTION,
    [BikeCanvasState.Derailleur]: DERAILLEUR_DESCRIPTION,
    [BikeCanvasState.DerailleurHanger]: DERAILLEUR_HANGER_DESCRIPTION,
    [BikeCanvasState.Pedal]: PEDAL_DESCRIPTION,
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
    rimPad: HTMLImageElement,
    discPad: HTMLImageElement,
    discRotor: HTMLImageElement,
    rimFrontView: HTMLImageElement,
    discFrontView: HTMLImageElement,
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
const cpm = 3600
const writeAfterMillis = 1000 * 60 / cpm
let infoFrame: number
function drawInfo(ctx: CanvasRenderingContext2D, state: BikeCanvasState) {
    const textSize = 24
    const lineHeight = 24
    const margin = 18
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

    if(eq(rgb, [3, 0, 0]) || eq(rgb, [252, 255, 255])) return "rim_pad"
    if(eq(rgb, [3, 0, 1]) || eq(rgb, [252, 255, 254])) return "disc_pad"
    if(eq(rgb, [3, 1, 0]) || eq(rgb, [252, 254, 255])) return "disc_rotor"
    if(eq(rgb, [3, 1, 1]) || eq(rgb, [252, 254, 254])) return "rim_front_view"
    if(eq(rgb, [3, 0, 2]) || eq(rgb, [252, 255, 253])) return "disc_front_view" 
        
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
                case BikeCanvasState.Brakes: return [0, -150]
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

    const rimPad: IconGroup = {
        children: [images.rimPad],
        offset: () => [50, 50]
    }

    const rimFrontView: IconGroup = {
        children: [images.rimFrontView],
        offset: () => [0, 250]
    }

    const rimBrakes: IconGroup = {
        children: [rimPad, rimFrontView],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.Brakes: return [50, 150]
                case BikeCanvasState.RimBrakes: return [50, 150]
                default: return [-200, 150]
            }
        }
    }

    const discPad: IconGroup = {
        children: [images.discPad],
        offset: () => [0, 50]
    }
    
    const discRotor: IconGroup = {
        children: [images.discRotor],
        offset: () => [100, 0]
    }

    const discFrontView: IconGroup = {
        children: [images.discFrontView],
        offset: () => [80, 250]
    }

    const discBrakes: IconGroup = {
        children: [discPad, discRotor, discFrontView],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.Brakes: return [275, 150]
                case BikeCanvasState.DiscBrakes: return [50, 150]
                default: return [275, 800]
            }
        }
    }

    const bike: IconGroup = {
        children: [rearWheel, frontWheel, fork, seat, frame, stem, handlebars, headset, frontBrake, drivetrain],
        offset: () => [270, 200]
    }

    const root: IconGroup = {
        children: [explodeButtons, backButton, bike, rimBrakes, discBrakes],
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

    if (state === BikeCanvasState.Brakes) {
        if (label === "rim_pad" || label === "rim_front_view") return BikeCanvasState.RimBrakes
        if (label === "disc_pad" || label === "disc_rotor" || label === "disc_front_view") return BikeCanvasState.DiscBrakes
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
    loadImage("/bike/rim_pad.png"),
    loadImage("/bike/disc_pad.png"),
    loadImage("/bike/disc_rotor.png"),
    loadImage("/bike/rim_front_view.png"),
    loadImage("/bike/disc_front_view.png"),
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
    rimPad,
    discPad,
    discRotor,
    rimFrontView,
    discFrontView,
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
        rimPad,
        discPad,
        discRotor,
        rimFrontView,
        discFrontView,
    })
})
