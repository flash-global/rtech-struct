import { Position } from '../Position';
import Carrier from './Carrier';
import Driver from './Driver';

type Vehicle = {
    carrier: Carrier,
    drivers?: Driver[],
    tracking_provider: string,
    plate: string,
    vehicle_type: string,
    type: 'sfu/vehicle',
    information?: string,
    brand?: string,
    packages: string[],
    last_position?: Position
};

export default Vehicle;
