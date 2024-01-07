export const drawCircle = (ctx, x, y, r, a1, a2, a3 = true) => {
    ctx.beginPath();
    ctx.arc(x,y,r,a1,a2,a3);
    ctx.closePath();
    ctx.fill();
}