import {temperatureRoute} from './actionTypes';
import {POINT_COUNT} from './appConstants';

let canvasElement;

export function getCanvasElement() {
    if (!canvasElement) {
        canvasElement = document.getElementById('data-grid');
    }
    return canvasElement;
}


export function setCanvasSize() {
    const canvas = getCanvasElement();

    if (window.innerWidth < 768) {
        canvas.height = 400;
        canvas.width = window.innerWidth - 20;
    } else {
        canvas.height = 400;
        canvas.width = 600;
    }
}


/**
 * Get x coordinates for column grids.
 *
 * @param {number} width
 * @param {number} count
 */
export function getXPoints(width, count) {
    const columnWidth = width/(count + 1);

    const points = [];

    for (let i = 1; i <= count; i++) {
        points.push(columnWidth * i);
    }

    return points;
}

export function clearCanvas() {
    getCanvasElement().getContext('2d').clearRect(0,0,600,400);
}

export function drawGrid() {
    const ctx = getCanvasElement().getContext('2d');
    const {height, width} = ctx.canvas;
    const xPoints = getXPoints(width, POINT_COUNT);

    // verticals
    ctx.fillStyle = 'rgba(255,255,255, 0.5)';
    xPoints.forEach(x => {
        ctx.fillRect(x, 0, 2, height);
    });

    // horisontal line
    ctx.fillRect(0, height/2, width, 2);
}

export function drawGraph({data, route}) {
    const isTemperature = route === temperatureRoute;

    const ctx = getCanvasElement().getContext('2d');
    const {height, width} = ctx.canvas;
    const xPoints = getXPoints(width, POINT_COUNT);
    const centerY = height / 2;

    ctx.fillStyle = '#00e676';
    xPoints.forEach((x, index) => {
        const pointData = data[index];
        ctx.beginPath();
        ctx.arc(x + 1, centerY + pointData.v * 3, 4, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#00e676';
    ctx.beginPath();
    xPoints.forEach((x, index) => {
        const pointData = data[index];
        ctx.lineTo(x + 1, centerY + pointData.v * 3);
    });
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = `${isTemperature ? 14 : 12}px Arial`;
    const label = isTemperature ? '°' : 'мм.';
    xPoints.forEach((x, index) => {
        const pointData = data[index];
        ctx.fillText(`${pointData.v}${label}`, x + 4, centerY + pointData.v * 3 - 4);
    });
}