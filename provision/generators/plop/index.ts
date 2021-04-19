import { NodePlopAPI } from 'node-plop'
import { testGenerator } from './templates'

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('test', testGenerator)
}
