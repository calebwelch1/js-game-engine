export const drawCircle = (ctx, x, y, r, a1, a2, a3 = true, options) => {
    // console.log('drawcircle', options.fillStyle);
    ctx.beginPath();
    ctx.arc(x,y,r,a1,a2,a3);
    if (options) {
        ctx.fillStyle=options.fillStyle
    }
    ctx.closePath();
    ctx.fill();
}