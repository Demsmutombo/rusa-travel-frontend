/**
 * RUSA TRAVEL - Configuration des plans de sièges
 * Layout 2-2: Standard (2 sièges gauche, 2 droite)
 * Layout 2-1: VIP (2 sièges gauche, 1 droite, plus spacieux)
 */

export type SeatColumn = 'A' | 'B' | 'C' | 'D'

export interface SeatLayout {
  rows: number
  columns: SeatColumn[]
  layout: '2-2' | '2-1'
  driverRow?: number
}

export const standardLayout: SeatLayout = {
  rows: 13,
  columns: ['A', 'B', 'C', 'D'],
  layout: '2-2',
  driverRow: 0,
}

export const vipLayout: SeatLayout = {
  rows: 12,
  columns: ['A', 'B', 'C'],
  layout: '2-1',
  driverRow: 0,
}

export function getSeatNumber(row: number, col: SeatColumn): number {
  const colIndex = ['A', 'B', 'C', 'D'].indexOf(col)
  return (row - 1) * 4 + colIndex + 1
}

export function parseSeatNumber(seatNum: number): { row: number; col: SeatColumn } {
  const row = Math.floor((seatNum - 1) / 4) + 1
  const colIndex = (seatNum - 1) % 4
  const cols: SeatColumn[] = ['A', 'B', 'C', 'D']
  return { row, col: cols[colIndex] }
}
