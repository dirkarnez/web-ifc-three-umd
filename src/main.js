import { ThreeScene } from './scene';
import { IfcManager } from './ifc-manager';

const ifcModels = [];

//document.getElementById('threeCanvas');
export default htmlElement => {
    const ifcManager = new IfcManager(new ThreeScene(htmlElement).scene, ifcModels);
    return {
        ifcManager,
        ifcModels
    }
}