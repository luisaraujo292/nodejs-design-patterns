// named export
// The export keyword can be used in front of the entities that we want to make 
// available to the module users.

// exports a function as `log`
export function log(message) {
  console.log(message)
}
// exports a constant as `DEFAULT_LEVEL`
export const DEFAULT_LEVEL = 'info'
// exports an objectas `LEVELS`
export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5
}
// exports a class as `Logger`
export class Logger {
  constructor(name) {
    this.name = name
  }
  log(message) {
    console.log(`[${this.name}] ${message}`)
  }
}