export default class GateDrawParams {
    /**
     * @param {!Painter} painter
     * @param {!boolean} isInToolbox
     * @param {!boolean} isHighlighted
     * @param {!Rect} rect
     * @param {!Gate} gate
     * @param {!CircuitStats} stats
     * @param {?{row: !int, col: !int}} positionInCircuit
     */
    constructor(painter, isInToolbox, isHighlighted, rect, gate, stats, positionInCircuit) {
        /** @type {!Painter} */
        this.painter = painter;
        /** @type {!boolean} */
        this.isInToolbox = isInToolbox;
        /** @type {!boolean} */
        this.isHighlighted = isHighlighted;
        /** @type {!Rect} */
        this.rect = rect;
        /** @type {!Gate} */
        this.gate = gate;
        /** @type {!CircuitStats} */
        this.stats = stats;
        /** @type {?{row: !int, col: !int}} */
        this.positionInCircuit = positionInCircuit;
    }
}