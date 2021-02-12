import React, { useEffect, useRef, CSSProperties } from 'react';
import * as d3 from 'd3';

import { GraphProps, IPointCoord, VOLSLine } from '../type';
import {
  ARROW_COLORS,
  VOLS_BACKGROUND_COLOR,
  ZONE_BACKGROUND_COLOR,
} from '../constants';

import './chart-view.scss';

export default function VOLSChartView({
  data,
  height,
  width
}: GraphProps) {

  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      updateDatapoints(width, height)
    }
  }, [data, width, height, d3Container.current])

  function updateDatapoints(width: number, height: number) {

    const svg = d3.select(d3Container.current);
    const blockWidth = width / 4;
    const blockHeight = height / 5;
    const areaNameTextSize = blockWidth / 8;
    const arrowStrokeWidth = blockWidth / 30;
    const arrowTextSize = blockWidth / 12;
    const arrowCircleSize = blockWidth / 37;

    const pointCoordArr = [
      {
        name: 'scolcovo',
        x: 0,
        y: blockHeight * 2
      },
      {
        name: 'm10',
        x: blockWidth,
        y: 0
      },
      {
        name: 'm9',
        x: blockWidth,
        y: blockHeight * 4
      },
      {
        name: 'ba86',
        x: blockWidth * 3,
        y: 0
      },
      {
        name: 'b19',
        x: blockWidth * 3,
        y: blockHeight * 4
      },
      {
        name: 'south',
        x: blockWidth * 2,
        y: blockHeight * 2
      }
    ];

    const pointCoord = new Map();
    pointCoordArr.forEach((el: IPointCoord) => {
      pointCoord.set(el.name, { x: el.x, y: el.y })
    })
    svg.selectAll("*").remove();

    createArrows();

    svg.selectAll('.block')
      .data(pointCoordArr)
      .enter()
      .append('rect')
      .attr("class", "block")
      .style('fill', ZONE_BACKGROUND_COLOR)
      .attr('width', blockWidth)
      .attr('height', blockHeight)
      .attr('x', (d: IPointCoord) => pointCoord.get(d.name).x)
      .attr('y', (d: IPointCoord) => pointCoord.get(d.name).y)
      .on('click', function (event, d) {
        window.location.hash = d.name;
      })

    // добавляем название зоны
    svg.selectAll('.area-text')
      .data(pointCoordArr)
      .enter()
      .append("text")
      .attr("class", "area-text")
      .attr("x", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth / 2)
      .attr("y", (d: IPointCoord) => pointCoord.get(d.name).y + blockHeight / 2)
      .text((d: IPointCoord) => data[d.name] ? data[d.name].name : '-')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("fill", "#fff")
      .style("font-size", areaNameTextSize)

    var statuses = svg.append("g")

    let areas = statuses.selectAll('.area-text');

    // добавляем статусы AG
    areas
      .data(pointCoordArr)
      .enter()
      .append("circle")
      // .attr("class", "area-text")
      .attr("cx", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 10)
      .attr("cy", (d: IPointCoord) => pointCoord.get(d.name).y + 10)
      .attr("r", 6)
      .style("fill", '#68e156')

    areas
      .data(pointCoordArr)
      .enter()
      .append("text")
      .attr("x", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 28)
      .attr("y", (d: IPointCoord) => pointCoord.get(d.name).y + 14)
      .text('AG')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("fill", "#fff")
      .style("font-size", (blockWidth / 20) + "px");


    // добавляем статусы AC
    areas
      .data(pointCoordArr)
      .enter()
      .append("circle")
      // .attr("class", "area-text")
      .attr("cx", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 10)
      .attr("cy", (d: IPointCoord) => pointCoord.get(d.name).y + 30)
      .attr("r", 6)
      .style("fill", '#68e156')

    areas
      .data(pointCoordArr)
      .enter()
      .append("text")
      .attr("x", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 28)
      .attr("y", (d: IPointCoord) => pointCoord.get(d.name).y + 34)
      .text('AC')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("fill", "#fff")
      .style("font-size", (blockWidth / 20) + "px");


    // // добавляем статусы SS
    // areas
    //   .data(pointCoordArr)
    //   .enter()
    //   .append("circle")
    //   // .attr("class", "area-text")
    //   .attr("cx", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 10)
    //   .attr("cy", (d: IPointCoord) => pointCoord.get(d.name).y + 50)
    //   .attr("r", 6)
    //   .style("fill", '#68e156')

    // areas
    //   .data(pointCoordArr)
    //   .enter()
    //   .append("text")
    //   .attr("x", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 28)
    //   .attr("y", (d: IPointCoord) => pointCoord.get(d.name).y + 54)
    //   .text('AG')
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("fill", "#fff")
    //   .style("font-size", (blockWidth / 20) + "px");

    // добавляем статусы SS
    areas
      .data(pointCoordArr)
      .enter()
      .append("circle")
      // .attr("class", "area-text")
      .attr("cx", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 10)
      .attr("cy", (d: IPointCoord) => pointCoord.get(d.name).y + 70)
      .attr("r", 6)
      .style("fill", '#68e156')

    areas
      .data(pointCoordArr)
      .enter()
      .append("text")
      .attr("x", (d: IPointCoord) => pointCoord.get(d.name).x + blockWidth - 28)
      .attr("y", (d: IPointCoord) => pointCoord.get(d.name).y + 74)
      .text('CR')
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("fill", "#fff")
      .style("font-size", (blockWidth / 20) + "px");

    // line.selectAll(`.arrow-circle_scolcovo-${to}`) // key: south (scolcovo -> south)
    // .data(data['scolcovo'].data[to]) // [{ name: "A4", status: 0 }]
    // .enter()
    // .append("circle")
    // .attr("class", `arrow-circle_scolcovo-${to}`)
    // .attr("cx", xEndArrow('scolcovo', to))
    // .attr("cy", (_, i: number) => yEndArrow('scolcovo', to, i))
    // .attr("r", 24)
    // .style("fill", '#000');

    // arrow-triangle
    svg.append("svg:defs")
      .selectAll('.arrow-triangle')
      .data(ARROW_COLORS)
      .enter()
      .append("svg:marker")
      .attr("class", "arrow-triangle")
      .attr("id", (_, i) => `triangle_${i}`)
      .attr("refX", arrowCircleSize)
      .attr("refY", 1.5)
      .attr("markerWidth", 20)
      .attr("markerHeight", 20)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M 0 0 3 1.5 0 3 0.5 1.5")
      .style("fill", (_, i) => ARROW_COLORS[i].color);

    function createArrows() {
      // arrow-scolcovo  
      if (data['scolcovo']) {
        for (var to in data['scolcovo'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_scolcovo-${to}`) // key: south (scolcovo -> south)
            .data(data['scolcovo'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_scolcovo-${to}`)
            .attr("id", "line_scolcovo_" + to)
            .attr("x1", xStartArrow('scolcovo'))
            .attr("y1", (_, i: number) => yStartArrow('scolcovo', to, i))
            .attr("x2", xEndArrow('scolcovo', to))
            .attr("y2", (_, i: number) => yEndArrow('scolcovo', to, i))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any)

          line.selectAll(`.arrow-circle_scolcovo-${to}`) // key: south (scolcovo -> south)
            .data(data['scolcovo'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_scolcovo-${to}`)
            .attr("cx", xEndArrow('scolcovo', to))
            .attr("cy", (_, i: number) => yEndArrow('scolcovo', to, i))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_scolcovo-${to}`) // key: south (scolcovo -> south)
            .data(data['scolcovo'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_scolcovo-${to}`)
            .attr("x", xEndArrow('scolcovo', to))
            .attr("y", (_, i: number) => yEndArrow('scolcovo', to, i))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string) {
          const x = pointCoord.get(from).x + blockWidth / 2;
          return x as number;
        }

        function yStartArrow(from: string, to: string, i: number) {
          let y = 0;
          if (from === 'scolcovo' && to === 'south') {
            y = pointCoord.get(from).y + blockHeight / 4 * i + blockHeight / 8
          } else {
            y = pointCoord.get(from).y + blockHeight / 2;
          }
          return y as number;
        }

        function xEndArrow(from: string, to: string,) {
          let x = 0;
          if (from === 'scolcovo' && to === 'south') {
            x = pointCoord.get(from).x + blockWidth * 1.5;
          } else {
            x = pointCoord.get(from).x + blockWidth;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string, i: number) {
          let y = 0;
          if (from === 'scolcovo' && to === 'south') {
            y = pointCoord.get(from).y + blockHeight / 4 * i + blockHeight / 8;
          } else if (from === 'scolcovo' && to === 'm9') {
            y = pointCoord.get(from).y - blockHeight / 2;
          } else {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          }
          return y as number;
        }

      }

      // arrow-m10 
      if (data['m10']) {
        for (var to in data['m10'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_m10-${to}`) // key: south (scolcovo -> south)
            .data(data['m10'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_m10-${to}`)
            .attr("x1", xStartArrow('m10'))
            .attr("y1", yStartArrow('m10'))
            .attr("x2", xEndArrow('m10', to))
            .attr("y2", yEndArrow('m10', to))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any);

          line.selectAll(`.arrow-circle_m10-${to}`) // key: south (scolcovo -> south)
            .data(data['m10'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_m10-${to}`)
            .attr("cx", xEndArrow('m10', to))
            .attr("cy", yEndArrow('m10', to))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_m10-${to}`) // key: south (scolcovo -> south)
            .data(data['m10'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_m10-${to}`)
            .attr("x", xEndArrow('m10', to))
            .attr("y", yEndArrow('m10', to))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string) {
          const x = pointCoord.get(from).x + blockWidth / 2;
          return x as number;
        }

        function yStartArrow(from: string) {
          const y = pointCoord.get(from).y + blockHeight / 2;
          return y as number;
        }

        function xEndArrow(from: string, to: string,) {
          let x = 0;
          if (from === 'm10' && to === 'scolcovo') {
            x = pointCoord.get(from).x;
          } else if (from === 'm10' && to === 'south') {
            x = pointCoord.get(from).x + blockWidth;
          } else {
            x = pointCoord.get(from).x + blockWidth * 1.5;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string) {
          let y = 0;
          if (from === 'm10' && to === 'scolcovo') {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          } else if (from === 'm10' && to === 'south') {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          } else {
            y = pointCoord.get(from).y + blockHeight * 0.5;
          }
          return y as number;
        }
      }

      // arrow-m9 
      if (data['m9']) {
        for (var to in data['m9'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_m9-${to}`) // key: m9 (scolcovo -> south)
            .data(data['m9'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_m9-${to}`)
            .attr("x1", xStartArrow('m9'))
            .attr("y1", yStartArrow('m9'))
            .attr("x2", xEndArrow('m9', to))
            .attr("y2", yEndArrow('m9', to))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any);

          line.selectAll(`.arrow-circle_m9-${to}`) // key: south (scolcovo -> south)
            .data(data['m9'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_m9-${to}`)
            .attr("cx", xEndArrow('m9', to))
            .attr("cy", yEndArrow('m9', to))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_m9-${to}`) // key: south (scolcovo -> south)
            .data(data['m9'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_m9-${to}`)
            .attr("x", xEndArrow('m9', to))
            .attr("y", yEndArrow('m9', to))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string) {
          const x = pointCoord.get(from).x + blockWidth / 2;
          return x as number;
        }

        function yStartArrow(from: string) {
          const y = pointCoord.get(from).y + blockHeight / 2;
          return y as number;
        }

        function xEndArrow(from: string, to: string,) {
          let x = 0;
          if (from === 'm9' && to === 'scolcovo') {
            x = pointCoord.get(from).x;
          } else if (from === 'm9' && to === 'south') {
            x = pointCoord.get(from).x + blockWidth;
          } else {
            x = pointCoord.get(from).x + blockWidth * 1.5;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string) {
          let y = 0;
          if (from === 'm9' && to === 'scolcovo') {
            y = pointCoord.get(from).y - blockHeight * 0.5;
          } else if (from === 'm9' && to === 'south') {
            y = pointCoord.get(from).y - blockHeight * 0.5;
          } else {
            y = pointCoord.get(from).y + blockHeight * 0.5;
          }
          return y as number;
        }

      }

      // arrow-south
      if (data['south']) {
        for (var to in data['south'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_south-${to}`) // key: south (scolcovo -> south)
            .data(data['south'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_south-${to}`)
            .attr("x1", (_, i: number) => xStartArrow('south', to, i))
            .attr("y1", (_, i: number) => yStartArrow('south', to, i))
            .attr("x2", (_, i: number) => xEndArrow('south', to, i))
            .attr("y2", (_, i: number) => yEndArrow('south', to, i))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any);

          line.selectAll(`.arrow-circle_south-${to}`) // key: south (scolcovo -> south)
            .data(data['south'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_south-${to}`)
            .attr("cx", (_, i: number) => xEndArrow('south', to, i))
            .attr("cy", (_, i: number) => yEndArrow('south', to, i))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_south-${to}`) // key: south (scolcovo -> south)
            .data(data['south'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_south-${to}`)
            .attr("x", (_, i: number) => xEndArrow('south', to, i))
            .attr("y", (_, i: number) => yEndArrow('south', to, i))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'south' && (to === 'ba86' || to === 'b19')) {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 4
          } else {
            x = pointCoord.get(from).x + blockWidth / 2;
          }
          return x as number;
        }

        function yStartArrow(from: string, to: string, i: number) {
          let y = 0;
          if (from === 'south' && to === 'scolcovo') {
            y = pointCoord.get(from).y + blockHeight / 4 * i + blockHeight / 8
          } else {
            y = pointCoord.get(from).y + blockHeight / 2;
          }
          return y as number;
        }

        function xEndArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'south' && to === 'scolcovo') {
            x = pointCoord.get(from).x - blockWidth * 0.5;
          } else if (from === 'south' && (to === 'm10' || to === 'm9')) {
            x = pointCoord.get(from).x;
          } else {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth * 0.75;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string, i: number) {
          let y = 0;
          if (from === 'south' && to === 'scolcovo') {
            y = pointCoord.get(from).y + blockHeight / 4 * i + blockHeight / 8
          } else if (from === 'south' && to === 'm9') {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          } else if (from === 'south' && to === 'm10') {
            y = pointCoord.get(from).y - blockHeight / 2;
          } else if (from === 'south' && to === 'ba86') {
            y = pointCoord.get(from).y - blockHeight / 2;
          } else {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          }
          return y as number;
        }

      }

      // arrow-ba86
      if (data['ba86']) {
        for (var to in data['ba86'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_ba86-${to}`) // key: ba86 (ba86 -> south)
            .data(data['ba86'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_ba86-${to}`)
            .attr("x1", (_, i: number) => xStartArrow('ba86', to, i))
            .attr("y1", yStartArrow('ba86'))
            .attr("x2", (_, i: number) => xEndArrow('ba86', to, i))
            .attr("y2", yEndArrow('ba86', to))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any);

          line.selectAll(`.arrow-circle_ba86-${to}`) // key: ba86 (scolcovo -> ba86)
            .data(data['ba86'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_ba86-${to}`)
            .attr("cx", (_, i: number) => xEndArrow('ba86', to, i))
            .attr("cy", yEndArrow('ba86', to))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_ba86-${to}`) // key: ba86 (scolcovo -> ba86)
            .data(data['ba86'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_ba86-${to}`)
            .attr("x", (_, i: number) => xEndArrow('ba86', to, i))
            .attr("y", yEndArrow('ba86', to))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'ba86' && to === 'm10') {
            x = pointCoord.get(from).x + blockWidth / 2;
          } else if (from === 'ba86' && to === 'south') {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 4;
          } else {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 2;
          }
          return x as number;
        }

        function yStartArrow(from: string) {
          const y = pointCoord.get(from).y + blockHeight / 2;
          return y as number;
        }

        function xEndArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'ba86' && to === 'b19') {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 2;
          } else if (from === 'ba86' && to === 'm10') {
            x = pointCoord.get(from).x - blockWidth * 0.5;
          } else {
            x = pointCoord.get(from).x + blockWidth / 4 * i - blockWidth * 0.25;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string) {
          let y = 0;
          if (from === 'ba86' && to === 'm10') {
            y = pointCoord.get(from).y + blockHeight / 2;
          } else if (from === 'ba86' && to === 'b19') {
            y = pointCoord.get(from).y + blockHeight * 2.5;
          } else {
            y = pointCoord.get(from).y + blockHeight * 1.5;
          }
          return y as number;
        }

      }

      // arrow-b19
      if (data['b19']) {
        for (var to in data['b19'].data) {
          var line = svg.append("g")
          line.selectAll(`.arrow-line_b19-${to}`) // key: b19 (b19 -> south)
            .data(data['b19'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("line")
            .attr("class", `arrow-line_b19-${to}`)
            .attr("x1", (_, i: number) => xStartArrow('b19', to, i))
            .attr("y1", yStartArrow('b19'))
            .attr("x2", (_, i: number) => xEndArrow('b19', to, i))
            .attr("y2", yEndArrow('b19', to))
            .attr("stroke-width", arrowStrokeWidth)
            .attr("stroke", ((d: VOLSLine) => ARROW_COLORS[d.status].color) as any)
            .attr("marker-end", ((d: VOLSLine) => `url(#triangle_${d.status})`) as any);

          line.selectAll(`.arrow-circle_b19-${to}`) // key: b19 (scolcovo -> b19)
            .data(data['b19'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("circle")
            .attr("class", `arrow-circle_b19-${to}`)
            .attr("cx", (_, i: number) => xEndArrow('b19', to, i))
            .attr("cy", yEndArrow('b19', to))
            .attr("r", 24)
            .style("fill", '#000');

          line.selectAll(`.text-line_b19-${to}`) // key: b19 (scolcovo -> b19)
            .data(data['b19'].data[to]) // [{ name: "A4", status: 0 }]
            .enter()
            .append("text")
            .attr("class", `text-line_b19-${to}`)
            .attr("x", (_, i: number) => xEndArrow('b19', to, i))
            .attr("y", yEndArrow('b19', to))
            .style("fill", "#fff")
            .style("font-size", arrowTextSize)
            .text(((d: VOLSLine) => d.name) as any)

            .attr("text-anchor", 'middle')
            .attr("alignment-baseline", "central")
        }

        function xStartArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'b19' && to === 'm9') {
            x = pointCoord.get(from).x + blockWidth / 2;
          } else if (from === 'b19' && to === 'south') {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 4;
          } else {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 2;
          }
          return x as number;
        }

        function yStartArrow(from: string) {
          const y = pointCoord.get(from).y + blockHeight / 2;
          return y as number;
        }

        function xEndArrow(from: string, to: string, i: number) {
          let x = 0;
          if (from === 'b19' && to === 'ba86') {
            x = pointCoord.get(from).x + blockWidth / 4 * i + blockWidth / 2;
          } else if (from === 'b19' && to === 'm9') {
            x = pointCoord.get(from).x - blockWidth * 0.5;
          } else {
            x = pointCoord.get(from).x + blockWidth / 4 * i - blockWidth * 0.25;
          }
          return x as number;
        }

        function yEndArrow(from: string, to: string) {
          let y = 0;
          if (from === 'b19' && to === 'm9') {
            y = pointCoord.get(from).y + blockHeight / 2;
          } else if (from === 'b19' && to === 'ba86') {
            y = pointCoord.get(from).y - blockHeight * 1.5;
          } else {
            y = pointCoord.get(from).y - blockHeight * 0.5;
          }
          return y as number;
        }

      }
    }
  }

  return (
    <svg
      style={{ backgroundColor: VOLS_BACKGROUND_COLOR } as CSSProperties}
      width={width}
      height={height}
      ref={d3Container}
    />
  );
}
