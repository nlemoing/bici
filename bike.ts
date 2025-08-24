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
The drivetrain is the name for the collection of components that makes the bike move.

Parts manufacturers (e.g. Shimano, SRAM) each have several sub-brands at different price points; more expensive means lighter, sharper shifting, and envy of fellow cyclists (but perhaps diminishing returns?). 

It's important that for each component of the drivetrain, the speeds and gearing is compatible; it's normally better to source each part of the drivetrain from the same manufacturer and brand.

Traditionally, shifting is done via a mechanical cable, though it's more common now on higher-end bikes to see electronic (wireless) shifting.

The drivetrain is always on the right hand side of the bike which is why the right hand side is called the "drive side".`;

const CHAIN_DESCRIPTION = `
The chain translates force from the crankset (pedals, cranks, chainring) to the rear wheel, allowing the bike to move.

It does so by interlocking with the teeth of the chainring and cassette; when the chainring rotates, so does the chain which causes the cassette to rotate.

Chains stretch and wear out over time which can cause gears to skip and can begin to damage the cassette if left too long.

Chains are sized specifically to the number of rear gears on a bike since the more rear gears there are, the closer they are together and the skinnier the chain must be. 

Chains are sold with more links than necessary because each bike requires a different length; when replacing a chain, it's easiest to use the old one as a reference.`

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

They come in many, many different geometries, but most frames have the same two-triangle structure to help distribute forces throughout the bike.

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

Another consideration is the type of headset that the head tube can accommodate: a head tube can be press-fit or integrated, and the cups in the headset have to match.

Headset compatibility is one of the hardest things to get right when building a bike from scratch; don't buy forks and a frame separately without checking that they'll work together first!`;

const EXPLODED_HEADSET_DESCRIPTION = `
Don't ask me what all these parts do! It's all very complicated and over my head, but I will try my best.

Headsets use bearings, which are a collection of balls packed in grease and constrained to roll smoothly and predictably, to turn smoothly. These can either be loose (meaning the balls are pressed by a cone but are visible once the bearing is taken out) or sealed (meaning the entire bearing system is contained in a cartridge).

Cups on either end of the headset fix the bearings in place, and spacers are used to make sure there are no gaps between the steerer tube, head tube, and stem.

The crown race sits at the base of the steerer tube and connects the fork to the headset.

On top, the preload bolt passes through the top cap and screws into the star nut, holding everything together.`;

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
    ExplodedHeadset,
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
    [BikeCanvasState.ExplodedHeadset]: EXPLODED_HEADSET_DESCRIPTION,
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
    info: HTMLImageElement,
    frame: HTMLImageElement,
    citiFrame: HTMLImageElement,
    downhillFrame: HTMLImageElement,
    pennyFarthing: HTMLImageElement,
    forkLeft: HTMLImageElement,
    forkRight: HTMLImageElement,
    mtbForks: HTMLImageElement,
    roadForks: HTMLImageElement,
    seat: HTMLImageElement,
    stem: HTMLImageElement,
    handlebars: HTMLImageElement,
    triBars: HTMLImageElement,
    mtbBars: HTMLImageElement,
    roadBars: HTMLImageElement,
    frontBrake: HTMLImageElement,
    wheel: HTMLImageElement,
    chainring: HTMLImageElement,
    cassette: HTMLImageElement,
    chain: HTMLImageElement,
    rearDerailleur: HTMLImageElement,
    frontDerailleur: HTMLImageElement,
    derailleurHanger: HTMLImageElement,
    crank: HTMLImageElement,
    pedal: HTMLImageElement,
    rimPad: HTMLImageElement,
    rimPadThreaded: HTMLImageElement,
    rimPadSmooth: HTMLImageElement,
    discPad: HTMLImageElement,
    discRotor: HTMLImageElement,
    discRotorCentrelock: HTMLImageElement,
    rimFrontView: HTMLImageElement,
    discFrontView: HTMLImageElement,
    spdCleat: HTMLImageElement,
    spdSlCleat: HTMLImageElement,
    spdPedal: HTMLImageElement,
    spdSlPedal: HTMLImageElement,
    flatPedal: HTMLImageElement,
    bearing: HTMLImageElement,
    bottomCup: HTMLImageElement,
    crownRace: HTMLImageElement,
    preLoadBolt: HTMLImageElement,
    starNut: HTMLImageElement,
    topCap: HTMLImageElement,
    topCoverAssembly: HTMLImageElement,
    topCup: HTMLImageElement,
}

type Labels = {
    bearing?: HTMLImageElement,
    bottomBracket?: HTMLImageElement,
    brake?: HTMLImageElement,
    cassette?: HTMLImageElement,
    centrelock?: HTMLImageElement,
    chain?: HTMLImageElement,
    chainring?: HTMLImageElement,
    citibike?: HTMLImageElement,
    cleat?: HTMLImageElement,
    crank?: HTMLImageElement,
    crownRace?: HTMLImageElement,
    derailleur?: HTMLImageElement,
    disc?: HTMLImageElement,
    downhillBike?: HTMLImageElement,
    drivetrain?: HTMLImageElement,
    flat?: HTMLImageElement,
    fork?: HTMLImageElement,
    frame?: HTMLImageElement,
    front?: HTMLImageElement,
    handlebars?: HTMLImageElement,
    hanger?: HTMLImageElement,
    headsetCup?: HTMLImageElement,
    headset?: HTMLImageElement,
    mtb?: HTMLImageElement,
    pad?: HTMLImageElement,
    pedal?: HTMLImageElement,
    pennyFarthing?: HTMLImageElement,
    preloadBolt?: HTMLImageElement,
    rear?: HTMLImageElement,
    rim?: HTMLImageElement,
    road?: HTMLImageElement,
    rotor?: HTMLImageElement,
    seat?: HTMLImageElement,
    sixBolt?: HTMLImageElement,
    smooth?: HTMLImageElement,
    spdSl?: HTMLImageElement,
    spd?: HTMLImageElement,
    starNut?: HTMLImageElement,
    stem?: HTMLImageElement,
    stud?: HTMLImageElement,
    threaded?: HTMLImageElement,
    timeTrial?: HTMLImageElement,
    topCap?: HTMLImageElement,
    topCoverAssembly?: HTMLImageElement,
    wheel?: HTMLImageElement,
}

const LABELS: Labels = {}

function interpolate(start: number, end: number, progress: number) {
    // SQRT interpolation was close, but too fast at the start and too slow at the end
    const scaledProgress = Math.pow(progress, 0.50)
    return start * (1 - scaledProgress) + end * scaledProgress
}

function clearCanvas(context: CanvasRenderingContext2D) {
    // Temporary white canvas for visibility, replace with transparent background
    // and use page styles 
    context.fillStyle = "white"
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}

const animationTimeMillis = 1000

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
        drawRoot(ctx, icons, startState, endState, progress)
        if (progress < 1) {
            requestAnimationFrame(step)
        } else {
            animationComplete(endState)
        }
    }
    requestAnimationFrame(step)
}

function drawRoot(
    ctx: CanvasRenderingContext2D,
    root: IconGroup,
    startState: BikeCanvasState,
    endState: BikeCanvasState,
    progress: number,
) {
    clearCanvas(ctx)

    drawIconGroup(ctx, root, startState, endState, progress, [0, 0])
}

function drawIconGroup(
    ctx: CanvasRenderingContext2D,
    group: IconGroup,
    startState: BikeCanvasState,
    endState: BikeCanvasState,
    progress: number,
    [x, y]: [number, number]
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
const lpm = 1800
const writeAfterMillis = 1000 * 60 / lpm
let infoFrame: number
function drawInfo(ctx: CanvasRenderingContext2D, state: BikeCanvasState) {
    const textSize = 20
    const lineHeight = 20
    const margin = 68
    const startX = 700
    const width = ctx.canvas.width - startX - margin

    ctx.font = `${textSize}px monospace`

    const text = info[state]
    if (text === undefined) return
    const lines: string[] = [""]

    let marker = 0;
    while (marker < text.length) {
        if (text[marker] === '\n') {
            lines.push("")
        } else if (text[marker] === " ") {
            let nextWs = marker + 1
            while (nextWs < text.length && text[nextWs] !== ' ' && text[nextWs] !== '\n') {
                nextWs++
            }
            const wordPadded = text.slice(marker, nextWs)
            console.log(wordPadded)
            console.log(lines[lines.length - 1])
            console.log(ctx.measureText(lines[lines.length - 1] + wordPadded).width)
            if (ctx.measureText(lines[lines.length - 1] + wordPadded).width < width) {
                lines[lines.length - 1] += ' '
            } else {
                lines.push("")
            }
        } else {
            lines[lines.length - 1] += text[marker]
        }

        marker++;
    }

    function drawLines(timestamp: DOMHighResTimeStamp) {
        // No more slow typing :)
        ctx.fillStyle = "rgb(255,255,255)"
        ctx.fillRect(startX, margin, width, ctx.canvas.height)
        ctx.fillStyle = "rgb(0, 0, 0)"
        for (let i = 0; i < lines.length; i++) {
            ctx.fillText(
                lines[i], 
                // Always start from the left baseline
                startX, 
                // Write the line in the vertical position corresponding to its number
                margin + lineHeight * i
            )
        }
    }

    infoFrame = requestAnimationFrame(drawLines)
}

function drawLabel(ctx: CanvasRenderingContext2D, labelText: string) {
    const x = 570
    const y = 10
    ctx.fillStyle = "rgb(255,255,255)"
    ctx.fillRect(x, y, 260, 50)
    if (labelText === "bearing" && LABELS.bearing) {
        ctx.drawImage(LABELS.bearing, x, y)
    } else if (labelText === "brake" && LABELS.brake) {
        ctx.drawImage(LABELS.brake, x, y)
    } else if (labelText === "cassette" && LABELS.cassette) {
        ctx.drawImage(LABELS.cassette, x, y)
    } else if (labelText === "chain" && LABELS.chain) {
        ctx.drawImage(LABELS.chain, x, y)
    } else if (labelText === "chainring" && LABELS.chainring) {
        ctx.drawImage(LABELS.chainring, x, y)
    } else if (labelText === "crank" && LABELS.crank) {
        ctx.drawImage(LABELS.crank, x, y)
    } else if (labelText === "crown_race" && LABELS.crownRace) {
        ctx.drawImage(LABELS.crownRace, x, y)
    } else if (labelText === "cup" && LABELS.headsetCup) {
        ctx.drawImage(LABELS.headsetCup, x, y)
    } else if (labelText === "derailleur_hanger" && LABELS.derailleur && LABELS.hanger) {
        ctx.drawImage(LABELS.derailleur, x, y)
        ctx.drawImage(LABELS.hanger, x + 140, y)
    } else if (labelText === "disc_front_view" && LABELS.disc && LABELS.brake) {
        ctx.drawImage(LABELS.disc, x, y)
        ctx.drawImage(LABELS.brake, x + 80, y)
    } else if (labelText === "disc_pad" && LABELS.disc && LABELS.pad) {
        ctx.drawImage(LABELS.disc, x, y)
        ctx.drawImage(LABELS.pad, x + 80, y)
    } else if (labelText === "disc_rotor" && LABELS.disc && LABELS.rotor) {
        ctx.drawImage(LABELS.disc, x, y)
        ctx.drawImage(LABELS.rotor, x + 80, y)
    } else if (labelText === "flat_pedal" && LABELS.flat && LABELS.pedal) {
        ctx.drawImage(LABELS.flat, x, y)
        ctx.drawImage(LABELS.pedal, x + 70, y)
    } else if (labelText === "fork" && LABELS.fork) {
        ctx.drawImage(LABELS.fork, x, y)
    } else if (labelText === "frame" && LABELS.frame) {
        ctx.drawImage(LABELS.frame, x, y)
    } else if (labelText === "front_derailleur" && LABELS.front && LABELS.derailleur) {
        ctx.drawImage(LABELS.front, x, y)
        ctx.drawImage(LABELS.derailleur, x + 80, y + 5)
    } else if (labelText === "handlebars" && LABELS.handlebars) {
        ctx.drawImage(LABELS.handlebars, x, y)
    } else if (labelText === "pedal" && LABELS.pedal) {
        ctx.drawImage(LABELS.pedal, x, y)
    } else if (labelText === "pre_load_bolt" && LABELS.preloadBolt) {
        ctx.drawImage(LABELS.preloadBolt, x, y)
    } else if (labelText === "rear_derailleur" && LABELS.rear && LABELS.derailleur) {
        ctx.drawImage(LABELS.rear, x, y)
        ctx.drawImage(LABELS.derailleur, x + 60, y)
    } else if (labelText === "rim_front_view" && LABELS.rim && LABELS.brake) {
        ctx.drawImage(LABELS.rim, x, y)
        ctx.drawImage(LABELS.brake, x + 70, y)
    } else if (labelText === "rim_pad" && LABELS.rim && LABELS.pad) {
        ctx.drawImage(LABELS.rim, x, y)
        ctx.drawImage(LABELS.pad, x + 70, y)
    } else if (labelText === "seat" && LABELS.seat) {
        ctx.drawImage(LABELS.seat, x, y)
    } else if (labelText === "spd_cleat" && LABELS.spd && LABELS.cleat) {
        ctx.drawImage(LABELS.spd, x, y + 5)
        ctx.drawImage(LABELS.cleat, x + 80, y)
    } else if (labelText === "spd_pedal" && LABELS.spd && LABELS.pedal) {
        ctx.drawImage(LABELS.spd, x, y + 5)
        ctx.drawImage(LABELS.pedal, x + 80, y)
    } else if (labelText === "spd_sl_cleat" && LABELS.spdSl && LABELS.cleat) {
        ctx.drawImage(LABELS.spdSl, x, y + 5)
        ctx.drawImage(LABELS.cleat, x + 110, y)
    } else if (labelText === "spd_sl_pedal" && LABELS.spdSl && LABELS.pedal) {
        ctx.drawImage(LABELS.spdSl, x, y + 5)
        ctx.drawImage(LABELS.pedal, x + 110, y)
    } else if (labelText === "star_nut" && LABELS.starNut) {
        ctx.drawImage(LABELS.starNut, x, y)
    } else if (labelText === "stem" && LABELS.stem) {
        ctx.drawImage(LABELS.stem, x, y)
    } else if (labelText === "top_cap" && LABELS.topCap) {
        ctx.drawImage(LABELS.topCap, x, y)
    } else if (labelText === "top_cover_assembly" && LABELS.topCoverAssembly) {
        ctx.drawImage(LABELS.topCoverAssembly, x, y)
    } else if (labelText === "wheel" && LABELS.wheel) {
        ctx.drawImage(LABELS.wheel, x, y)
    }
}

function getLabel(rgb: [number, number, number]) {
    // This should match the mappings we did in image_processing/colour_map.py
    // Unfortunately I realized too late that openCV uses BGR which messed everything up
    // which is why the paramters here are out of order
    function eq([r1, g1, b1]: [number, number, number], [b2, g2, r2]: [number, number, number]) {
        return r1 === r2 && g1 === g2 && b1 === b2
    }

    if(eq(rgb, [0, 0, 209]) || eq(rgb, [165, 165, 165]) || eq(rgb, [2, 3, 2]))      return "explode"
    if(eq(rgb, [0, 209, 0]) || eq(rgb, [166, 166, 166]) || eq(rgb, [2, 3, 3]))      return "back"
    if(eq(rgb, [2, 3, 1])   || eq(rgb, [253, 252, 254]) || eq(rgb, [253, 122, 68])) return "info"
    
    if(eq(rgb, [0, 0, 1]) || eq(rgb, [0, 0, 230])) return "frame"
    if(eq(rgb, [0, 1, 0]) || eq(rgb, [0, 0, 231])) return "fork" 
    if(eq(rgb, [0, 1, 1]) || eq(rgb, [223, 223, 223])) return "seat" 
    if(eq(rgb, [1, 0, 0]) || eq(rgb, [254, 255, 255])) return "stem" 
    if(eq(rgb, [1, 0, 1]) || eq(rgb, [254, 255, 254])) return "handlebars"
    if(eq(rgb, [1, 1, 1]) || eq(rgb, [254, 254, 254])) return "brake"
    if(eq(rgb, [1, 1, 2]) || eq(rgb, [254, 254, 253])) return "wheel" 
    if(eq(rgb, [1, 2, 1]) || eq(rgb, [254, 253, 254])) return "chainring"
    if(eq(rgb, [1, 2, 2]) || eq(rgb, [254, 253, 253])) return "cassette"
    if(eq(rgb, [2, 1, 1]) || eq(rgb, [253, 254, 254])) return "chain"
    if(eq(rgb, [2, 1, 2]) || eq(rgb, [253, 254, 253])) return "rear_derailleur"
    if(eq(rgb, [2, 1, 3]) || eq(rgb, [224, 224, 224])) return "front_derailleur"
    if(eq(rgb, [2, 2, 1]) || eq(rgb, [253, 253, 254])) return "derailleur_hanger"
    if(eq(rgb, [2, 2, 2]) || eq(rgb, [222, 222, 222])) return "crank"
    if(eq(rgb, [2, 2, 3]) || eq(rgb, [253, 253, 252])) return "pedal"
    if(eq(rgb, [2, 2, 4]) || eq(rgb, [253, 253, 251])) return "flat_pedal"
    if(eq(rgb, [2, 2, 5]) || eq(rgb, [253, 253, 250])) return "spd_pedal"
    if(eq(rgb, [2, 2, 6]) || eq(rgb, [253, 253, 249])) return "spd_sl_pedal"
    if(eq(rgb, [2, 3, 4]) || eq(rgb, [253, 252, 251])) return "spd_cleat"
    if(eq(rgb, [2, 4, 3]) || eq(rgb, [253, 251, 252])) return "spd_sl_cleat"
    if(eq(rgb, [2, 4, 4]) || eq(rgb, [253, 251, 251])) return "mtb_forks"
    if(eq(rgb, [2, 4, 5]) || eq(rgb, [253, 251, 250])) return "road_forks"
    if(eq(rgb, [2, 5, 5]) || eq(rgb, [253, 250, 250])) return "mtb_bars"
    if(eq(rgb, [2, 5, 6]) || eq(rgb, [253, 250, 249])) return "road_bars"
    if(eq(rgb, [2, 6, 6]) || eq(rgb, [253, 249, 249])) return "tri_bars"

    if(eq(rgb, [3, 0, 0]) || eq(rgb, [252, 255, 255])) return "rim_pad"
    if(eq(rgb, [3, 0, 1]) || eq(rgb, [252, 255, 254])) return "disc_pad"
    if(eq(rgb, [3, 1, 0]) || eq(rgb, [252, 254, 255])) return "disc_rotor"
    if(eq(rgb, [3, 1, 1]) || eq(rgb, [252, 254, 254])) return "rim_front_view"
    if(eq(rgb, [3, 0, 2]) || eq(rgb, [252, 255, 253])) return "disc_front_view" 

    if(eq(rgb, [4, 0, 0]) || eq(rgb, [251, 255, 255])) return "bearing"
    if(eq(rgb, [4, 0, 1]) || eq(rgb, [251, 255, 254])) return "cup"
    if(eq(rgb, [4, 1, 0]) || eq(rgb, [251, 254, 255])) return "crown_race"
    if(eq(rgb, [4, 1, 1]) || eq(rgb, [251, 254, 254])) return "pre_load_bolt"
    if(eq(rgb, [4, 1, 2]) || eq(rgb, [251, 254, 253])) return "star_nut" 
    if(eq(rgb, [4, 2, 1]) || eq(rgb, [221, 221, 221])) return "top_cap" 
    if(eq(rgb, [4, 2, 2]) || eq(rgb, [251, 253, 253])) return "top_cover_assembly" 
        
    return undefined
}

const startStates = [BikeCanvasState.Bike, BikeCanvasState.ExplodedBike]
const explodingStates = [
    BikeCanvasState.Bike,
    BikeCanvasState.ExplodedBike,
    BikeCanvasState.Drivetrain,
    BikeCanvasState.ExplodedDrivetrain,
    BikeCanvasState.Headset,
    BikeCanvasState.ExplodedHeadset,
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
        offset: () => [75, 3]
    }

    const info: IconGroup = {
        children: [images.info],
        offset: () => [5, 20]
    }

    // Bike
    const seat: IconGroup = {
        children: [images.seat],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [206, -95]
                case BikeCanvasState.ExplodedBike: return [91, -195]
                case BikeCanvasState.Seat: return [30, 100]
                default: return [45, -350]
            }
        }
    }

    const handlebars: IconGroup = {
        children: [images.handlebars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [660, -120]
                case BikeCanvasState.ExplodedBike: return [780, -120]
                case BikeCanvasState.Handlebars: return [0, -100]
                default: return [1200, -120]
            }
        }
    }

    const crownRace: IconGroup = {
        children: [images.crownRace],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [35, 260]
                default: return [12, 100]
            }
        }
    }

    const bottomBearing: IconGroup = {
        children: [images.bearing],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [34, 225]
                default: return [11, 90]
            }
        }
    }

    const starNut: IconGroup = {
        children: [images.starNut],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [35, 180]
                default: return [16, 85]
            }
        }
    }

    const bottomCup: IconGroup = {
        children: [images.bottomCup],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [22, 140]
                default: return [16, 80]
            }
        }
    }

    const topCup: IconGroup = {
        children: [images.topCup],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [-10, 10]
                default: return [4, 75]
            }
        }
    }

    const topBearing: IconGroup = {
        children: [images.bearing],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [-12, -25]
                default: return [6, 65]
            }
        }
    }

    const topCoverAssembly: IconGroup = {
        children: [images.topCoverAssembly],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [-22, -60]
                default: return [0, 50]
            }
        }
    }

    const preLoadBolt: IconGroup = {
        children: [images.preLoadBolt],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.ExplodedHeadset: return [-42, -210]
                default: return [8, 35]
            }
        }
    }

    const internalHeadset: IconGroup = {
        children: [crownRace, bottomBearing, starNut, bottomCup, topCup, topBearing, topCoverAssembly, preLoadBolt],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [585, -20]
                case BikeCanvasState.ExplodedBike: return [485, -20]
                case BikeCanvasState.Headset: return [0, 50]
                case BikeCanvasState.ExplodedHeadset: return [0, 50]
                case BikeCanvasState.Frame: return [315, -170]
                default: return [-415, 180]
            }
        }
    }

    // Top cap has to come first but has to stay in sync with internal headset
    const topCap: IconGroup = {
        children: [images.topCap],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [585, -20]
                case BikeCanvasState.ExplodedBike: return [465, -120]
                case BikeCanvasState.Headset: return [0, 50]
                case BikeCanvasState.ExplodedHeadset: return [-37, -115]
                default: return [400, -420]
            }
        }
    }

    const stem: IconGroup = {
        children: [images.stem],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [575, -30]
                case BikeCanvasState.ExplodedBike: return [595, -30]
                case BikeCanvasState.Headset: return [-10, 40]
                case BikeCanvasState.ExplodedHeadset: return [-37, -85]
                case BikeCanvasState.Stem: return [30, 100]
                default: return [750, -300]
            }
        }
    }

    // These two must be identical but have to be drawn separately, one in front of the wheel and one behind it
    const forkLeft: IconGroup = {
        children: [images.forkLeft],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [590, 0]
                case BikeCanvasState.ExplodedBike: return [530, 200]
                case BikeCanvasState.Headset: return [5, 70]
                case BikeCanvasState.ExplodedHeadset: return [60, 360]
                case BikeCanvasState.Fork: return [30, -100]
                default: return [690, 550]
            }
        }
    }

    const forkRight: IconGroup = {
        children: [images.forkRight],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [590, 0]
                case BikeCanvasState.ExplodedBike: return [530, 200]
                case BikeCanvasState.Headset: return [5, 70]
                case BikeCanvasState.ExplodedHeadset: return [60, 360]
                case BikeCanvasState.Fork: return [30, -100]
                default: return [690, 550]
            }
        }
    }

    const frame: IconGroup = {
        children: [images.frame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Bike: return [0, 0]
                case BikeCanvasState.ExplodedBike: return [-100, 0]
                case BikeCanvasState.Headset: return [-585, 70]
                case BikeCanvasState.ExplodedHeadset: return [-585, 70]
                case BikeCanvasState.Frame: return [-270, -150]
                default: return [-1000, 200]
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
                case BikeCanvasState.Wheel: return [-50, 50]
                default: return [-550, -65]
            }
        }
    }

    // Drivetrain
    const chainring: IconGroup = {
        children: [images.chainring],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Chainring: return [0, -475]
                case BikeCanvasState.ExplodedDrivetrain: return [250, -150]
                default: return [250, 15]
            }
        }
    }
    const cassette: IconGroup = {
        children: [images.cassette],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Cassette: return [0, -475]
                case BikeCanvasState.ExplodedDrivetrain: return [0, -120]
                default: return [0, 35]
            }
        }
    }
    const chain: IconGroup = {
        children: [images.chain],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Chain: return [-100, -475]
                default: return [0, 0]
            }
        }
    }
    const rearDerailleur: IconGroup = {
        children: [images.rearDerailleur],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Derailleur: return [-130, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [28, 205]
                default: return [28, 80]
            }
        }
    }

    const frontDerailleur: IconGroup = {
        children: [images.frontDerailleur],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Derailleur: return [130, -575]
                case BikeCanvasState.ExplodedDrivetrain: return [330, 210]
                default: return [265, 0]
            }
        }
    }

    const derailleurHanger: IconGroup = {
        children: [images.derailleurHanger],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.DerailleurHanger: return [0, -475]
                case BikeCanvasState.ExplodedDrivetrain: return [215, 210]
                default: return [40, 64]
            }
        }
    }
    const leftCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.ExplodedDrivetrain: return [100, 300]
                default: return [300, -35]
            }
        }
    }
    const rightCrank: IconGroup = {
        children: [images.crank],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Crank: return [0, -475]
                case BikeCanvasState.ExplodedDrivetrain: return [40, 300]
                default: return [230, 80]
            }
        }
    }
    const leftPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.ExplodedDrivetrain: return [225, 340]
                default: return [350, -35]
            }
        }
    }
    const rightPedal: IconGroup = {
        children: [images.pedal],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Pedal: return [60, -700]
                case BikeCanvasState.ExplodedDrivetrain: return [225, 380]
                default: return [218, 199]
            }
        }
    }

    const drivetrain: IconGroup = {
        children: [leftPedal, leftCrank, cassette, chainring, chain, rearDerailleur, frontDerailleur, derailleurHanger, rightCrank, rightPedal],
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
        offset: () => [30, 50]
    }

    const rimPadThreaded: IconGroup = {
        children: [images.rimPadThreaded],
        offset: () => [150, 50]
    }

    const rimPadSmooth: IconGroup = {
        children: [images.rimPadSmooth],
        offset: () => [90, 150] 
    }

    const rimFrontView: IconGroup = {
        children: [images.rimFrontView],
        offset: () => [0, 250]
    }

    const rimBrakes: IconGroup = {
        children: [rimPad, rimFrontView, rimPadSmooth, rimPadThreaded],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.Brakes: return [50, 150]
                case BikeCanvasState.RimBrakes: return [150, 150]
                default: return [-300, 150]
            }
        }
    }

    const discPad: IconGroup = {
        children: [images.discPad],
        offset: () => [70, 0]
    }
    
    const discRotor: IconGroup = {
        children: [images.discRotor],
        offset: () => [200, 150]
    }

    const discRotorCentrelock: IconGroup = {
        children: [images.discRotorCentrelock],
        offset: () => [200, 360]
    }

    const discFrontView: IconGroup = {
        children: [images.discFrontView],
        offset: () => [60, 200]
    }

    const discBrakes: IconGroup = {
        children: [discPad, discRotor, discFrontView, discRotorCentrelock],
        offset: (state) => {
            switch(state) {
                case BikeCanvasState.Brakes: return [275, 150]
                case BikeCanvasState.DiscBrakes: return [150, 150]
                default: return [275, 800]
            }
        }
    }

    const bike: IconGroup = {
        children: [rearWheel, forkRight, frontWheel, forkLeft, seat, internalHeadset, frame, stem, handlebars, topCap, frontBrake, drivetrain],
        offset: () => [270, 200]
    }

    // Additional images
    const citiFrame: IconGroup = {
        children: [images.citiFrame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Frame: return [350, 300]
                default: return [700, 750]
            }
        },
    }

    const downhillFrame: IconGroup = {
        children: [images.downhillFrame],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Frame: return [50, 300]
                default: return [-400, 300]
            }
        },
    }

    const pennyFarthing: IconGroup = {
        children: [images.pennyFarthing],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Frame: return [200, 500]
                default: return [200, 750]
            }
        },
    }

    // More bars
    const triBars: IconGroup = {
        children: [images.triBars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Handlebars: return [150, 400]
                default: return [-300, -300]
            }
        },
    }

    const roadBars: IconGroup = {
        children: [images.roadBars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Handlebars: return [350, 400]
                default: return [600, -300]
            }
        },
    }

    const mtbBars: IconGroup = {
        children: [images.mtbBars],
        offset: (state) => {
            switch (state) {
                case BikeCanvasState.Handlebars: return [200, 550]
                default: return [-200, 800]
            }
        },
    }

    // Cleats and pedals
    const spdCleat: IconGroup = {
        children: [images.spdCleat],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Pedal: return [200, 170]
                default: return [-300, 0]
            }
        },
    }

    const spdPedal: IconGroup = {
        children: [images.spdPedal],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Pedal: return [150, 330]
                default: return [-300, 200]
            }
        },
    }

    const spdSlCleat: IconGroup = {
        children: [images.spdSlCleat],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Pedal: return [400, 160]
                default: return [600, -400]
            }
        },
    }

    const spdSlPedal: IconGroup = {
        children: [images.spdSlPedal],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Pedal: return [350, 320]
                default: return [600, 800]
            }
        },
    }

    const flatPedal: IconGroup = {
        children: [images.flatPedal],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Pedal: return [200, 500]
                default: return [0, 800]
            }
        },
    }


    const mtbForks: IconGroup = {
        children: [images.mtbForks],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Fork: return [100, 400]
                default: return [-400, 400]
            }
        },
    }

    const roadForks: IconGroup = {
        children: [images.roadForks],
        offset(state) {
            switch(state) {
                case BikeCanvasState.Fork: return [500, 400]
                default: return [600, 900]
            }
        },
    }

    const root: IconGroup = {
        children: [
            explodeButtons, 
            backButton, 
            info,
            bike, 
            rimBrakes, 
            discBrakes,
            citiFrame,
            downhillFrame,
            pennyFarthing,
            mtbBars,
            roadBars,
            triBars,
            spdCleat,
            spdSlCleat,
            spdPedal,
            spdSlPedal,
            flatPedal,
            mtbForks,
            roadForks,
        ],
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
        if (state === BikeCanvasState.Headset) return BikeCanvasState.ExplodedHeadset
        if (state === BikeCanvasState.ExplodedHeadset) return BikeCanvasState.Headset
    }

    if (label === "frame") return BikeCanvasState.Frame
    if (label === "seat") return BikeCanvasState.Seat
    if (label === "brake") return BikeCanvasState.Brakes
    if (label === "wheel") return BikeCanvasState.Wheel
    if (label === "handlebars") return BikeCanvasState.Handlebars
    if (label === "stem") return BikeCanvasState.Stem
    if (label === "fork") return BikeCanvasState.Fork

    const drivetrainLabels = ["cassette", "chain", "chainring", "crank", "rear_derailleur", "front_derailleur", "derailleur_hanger", "pedal"]
    // Not exhaustive but internal headset should be hidden
    const headsetLabels = ["top_cap"]
    if (startStates.indexOf(state) !== -1) {
        if (drivetrainLabels.indexOf(label) !== -1) return BikeCanvasState.Drivetrain
        if (headsetLabels.indexOf(label) !== -1) return BikeCanvasState.Headset
    }

    const drivetrainStates = [BikeCanvasState.Drivetrain, BikeCanvasState.ExplodedDrivetrain]
    if (drivetrainStates.indexOf(state) !== -1) {
        if (label === "cassette") return BikeCanvasState.Cassette
        if (label === "chain") return BikeCanvasState.Chain
        if (label === "chainring") return BikeCanvasState.Chainring
        if (label === "crank") return BikeCanvasState.Crank
        if (label === "rear_derailleur") return BikeCanvasState.Derailleur
        if (label === "front_derailleur") return BikeCanvasState.Derailleur
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

    const getCoordinates = (ev: MouseEvent) => {
        const bounding = canvas.getBoundingClientRect();
        const xScaleFactor = canvas.width / bounding.width;
        const yScaleFactor = canvas.height / bounding.height
        const x = Math.round(ev.offsetX * xScaleFactor);
        const y = Math.round(ev.offsetY * yScaleFactor);
        return { x, y };
    }

    canvas.addEventListener("click", ev => {
        if (inTransition) return

        const { x, y } = getCoordinates(ev);

        const pixel = context.getImageData(x, y, 1, 1);
        const data = pixel.data;

        const labelText = getLabel([data[0], data[1], data[2]]);
        if (labelText === undefined) return

        let startState: BikeCanvasState
        let endState: BikeCanvasState
        
        if (labelText === "info") {
            window.open('https://lemoing.ca/blog/bicyclopedia', '_blank');
        } else if (labelText === "explode") {
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
            canvas.style.cursor = "default"
        }
    })

    canvas.addEventListener("mousemove", ev => {
        const { x, y } = getCoordinates(ev);

        const pixel = context.getImageData(x, y, 1, 1);
        const data = pixel.data;
        const labelText = getLabel([data[0], data[1], data[2]]);
        drawLabel(context, labelText)

        if (labelText === "info" || labelText === "back" || labelText === "explode" || nextState(state[state.length - 1], labelText)) {
            canvas.style.cursor = "pointer"
        } else {
            canvas.style.cursor = "default"
        }
    })
    
    drawRoot(context, root, initialState, initialState, 1)
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
    loadImage("/icons/info.png"),
    loadImage("/bike/frame.png"),
    loadImage("/bike/citi_frame.png"),
    loadImage("/bike/downhill_frame.png"),
    loadImage("/bike/penny_farthing.png"),
    loadImage("/bike/fork_left.png"),
    loadImage("/bike/fork_right.png"),
    loadImage("/bike/mtb_forks.png"),
    loadImage("/bike/road_forks.png"),
    loadImage("/bike/seat.png"),
    loadImage("/bike/stem.png"),
    loadImage("/bike/handlebars.png"),
    loadImage("/bike/tri_bars.png"),
    loadImage("/bike/mtb_bars.png"),
    loadImage("/bike/road_bars.png"),
    loadImage("/bike/brake.png"),
    loadImage("/bike/wheel.png"),
    loadImage("/bike/chainring.png"),
    loadImage("/bike/cassette.png"),
    loadImage("/bike/chain.png"),
    loadImage("/bike/rear_derailleur.png"),
    loadImage("/bike/front_derailleur.png"),
    loadImage("/bike/derailleur_hanger.png"),
    loadImage("/bike/crank.png"),
    loadImage("/bike/pedal.png"),
    loadImage("/bike/rim_road.png"),
    loadImage("/bike/rim_threaded_stud.png"),
    loadImage("/bike/rim_smooth_stud.png"),
    loadImage("/bike/disc_pads.png"),
    loadImage("/bike/disc_rotor.png"),
    loadImage("/bike/disc_rotor_centrelock.png"),
    loadImage("/bike/rim_front_view.png"),
    loadImage("/bike/disc_front_view.png"),
    loadImage("/bike/spd_cleat.png"),
    loadImage("/bike/spd_sl_cleat.png"),
    loadImage("/bike/spd_pedal.png"),
    loadImage("/bike/spd_sl_pedal.png"),
    loadImage("/bike/flat_pedal.png"),
    loadImage("/bike/bearing.png"),
    loadImage("/bike/bottom_cup.png"),
    loadImage("/bike/crown_race.png"),
    loadImage("/bike/pre_load_bolt.png"),
    loadImage("/bike/star_nut.png"),
    loadImage("/bike/top_cap.png"),
    loadImage("/bike/top_cover_assembly.png"),
    loadImage("/bike/top_cup.png"),
]).then(([
    buttonPressed,
    buttonUnpressed,
    backButtonPressed,
    info,
    frame,
    citiFrame,
    downhillFrame,
    pennyFarthing,
    forkLeft,
    forkRight,
    mtbForks,
    roadForks,
    seat,
    stem,
    handlebars,
    triBars,
    mtbBars,
    roadBars,
    frontBrake,
    wheel,
    chainring,
    cassette,
    chain,
    rearDerailleur,
    frontDerailleur,
    derailleurHanger,
    crank,
    pedal,
    rimPad,
    rimPadThreaded,
    rimPadSmooth,
    discPad,
    discRotor,
    discRotorCentrelock,
    rimFrontView,
    discFrontView,
    spdCleat,
    spdSlCleat,
    spdPedal,
    spdSlPedal,
    flatPedal,
    bearing,
    bottomCup,
    crownRace,
    preLoadBolt,
    starNut,
    topCap,
    topCoverAssembly,
    topCup,
]) => {
    init({
        buttonPressed,
        buttonUnpressed,
        backButtonPressed,
        info,
        frame,
        citiFrame,
        downhillFrame,
        pennyFarthing,
        forkLeft,
        forkRight,
        mtbForks,
        roadForks,
        seat,
        stem,
        handlebars,
        triBars,
        mtbBars,
        roadBars,
        frontBrake,
        wheel,
        chainring,
        cassette,
        chain,
        rearDerailleur,
        frontDerailleur,
        derailleurHanger,
        crank,
        pedal,
        rimPad,
        rimPadThreaded,
        rimPadSmooth,
        discPad,
        discRotor,
        discRotorCentrelock,
        rimFrontView,
        discFrontView,
        spdCleat,
        spdSlCleat,
        spdPedal,
        spdSlPedal,
        flatPedal,
        bearing,
        bottomCup,
        crownRace,
        preLoadBolt,
        starNut,
        topCap,
        topCoverAssembly,
        topCup,
    })
}).then(() => {
    Promise.all([
        loadImage("/descriptions/bearing.png"),
        loadImage("/descriptions/bottom_bracket.png"),
        loadImage("/descriptions/brake.png"),
        loadImage("/descriptions/cassette.png"),
        loadImage("/descriptions/centrelock.png"),
        loadImage("/descriptions/chain.png"),
        loadImage("/descriptions/chainring.png"),
        loadImage("/descriptions/citibike.png"),
        loadImage("/descriptions/cleat.png"),
        loadImage("/descriptions/crank.png"),
        loadImage("/descriptions/crown_race.png"),
        loadImage("/descriptions/derailleur.png"),
        loadImage("/descriptions/disc.png"),
        loadImage("/descriptions/downhill_bike.png"),
        loadImage("/descriptions/drivetrain.png"),
        loadImage("/descriptions/flat.png"),
        loadImage("/descriptions/fork.png"),
        loadImage("/descriptions/frame.png"),
        loadImage("/descriptions/front.png"),
        loadImage("/descriptions/handlebars.png"),
        loadImage("/descriptions/hanger.png"),
        loadImage("/descriptions/headset_cup.png"),
        loadImage("/descriptions/headset.png"),
        loadImage("/descriptions/mtb.png"),
        loadImage("/descriptions/pad.png"),
        loadImage("/descriptions/pedal.png"),
        loadImage("/descriptions/penny_farthing.png"),
        loadImage("/descriptions/preload_bolt.png"),
        loadImage("/descriptions/rear.png"),
        loadImage("/descriptions/rim.png"),
        loadImage("/descriptions/road.png"),
        loadImage("/descriptions/rotor.png"),
        loadImage("/descriptions/seat.png"),
        loadImage("/descriptions/six_bolt.png"),
        loadImage("/descriptions/smooth.png"),
        loadImage("/descriptions/spd_sl.png"),
        loadImage("/descriptions/spd.png"),
        loadImage("/descriptions/star_nut.png"),
        loadImage("/descriptions/stem.png"),
        loadImage("/descriptions/stud.png"),
        loadImage("/descriptions/threaded.png"),
        loadImage("/descriptions/time_trial.png"),
        loadImage("/descriptions/top_cap.png"),
        loadImage("/descriptions/top_cover_assembly.png"),
        loadImage("/descriptions/wheel.png"),
    ]).then(([
        bearing,
        bottomBracket,
        brake,
        cassette,
        centrelock,
        chain,
        chainring,
        citibike,
        cleat,
        crank,
        crownRace,
        derailleur,
        disc,
        downhillBike,
        drivetrain,
        flat,
        fork,
        frame,
        front,
        handlebars,
        hanger,
        headsetCup,
        headset,
        mtb,
        pad,
        pedal,
        pennyFarthing,
        preloadBolt,
        rear,
        rim,
        road,
        rotor,
        seat,
        sixBolt,
        smooth,
        spdSl,
        spd,
        starNut,
        stem,
        stud,
        threaded,
        timeTrial,
        topCap,
        topCoverAssembly,
        wheel,
    ]) => {
        LABELS.bearing = bearing
        LABELS.bottomBracket = bottomBracket
        LABELS.brake = brake
        LABELS.cassette = cassette
        LABELS.centrelock = centrelock
        LABELS.chain = chain
        LABELS.chainring = chainring
        LABELS.citibike = citibike
        LABELS.cleat = cleat
        LABELS.crank = crank
        LABELS.crownRace = crownRace
        LABELS.derailleur = derailleur
        LABELS.disc = disc
        LABELS.downhillBike = downhillBike
        LABELS.drivetrain = drivetrain
        LABELS.flat = flat
        LABELS.fork = fork
        LABELS.frame = frame
        LABELS.front = front
        LABELS.handlebars = handlebars
        LABELS.hanger = hanger
        LABELS.headsetCup = headsetCup
        LABELS.headset = headset
        LABELS.mtb = mtb
        LABELS.pad = pad
        LABELS.pedal = pedal
        LABELS.pennyFarthing = pennyFarthing
        LABELS.preloadBolt = preloadBolt
        LABELS.rear = rear
        LABELS.rim = rim
        LABELS.road = road
        LABELS.rotor = rotor
        LABELS.seat = seat
        LABELS.sixBolt = sixBolt
        LABELS.smooth = smooth
        LABELS.spdSl = spdSl
        LABELS.spd = spd
        LABELS.starNut = starNut
        LABELS.stem = stem
        LABELS.stud = stud
        LABELS.threaded = threaded
        LABELS.timeTrial = timeTrial
        LABELS.topCap = topCap
        LABELS.topCoverAssembly = topCoverAssembly
        LABELS.wheel = wheel
    })
})
