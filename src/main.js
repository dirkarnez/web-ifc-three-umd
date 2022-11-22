import { ThreeScene } from './scene';
import { IfcManager } from './ifc-manager';
import * as WebIFC from 'web-ifc';


//document.getElementById('threeCanvas');
export default {
    WebIFC,
    createScene: htmlElement => new IfcManager(new ThreeScene(htmlElement).scene)
}