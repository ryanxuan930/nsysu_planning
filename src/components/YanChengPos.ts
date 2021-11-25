interface PosData {
    name: string;
    longtitude: number;
    latitude: number;
}
interface LineData {
    pos1: string; 
    pos2: string;
    side: number;
}
export class YanChengPos {
    protected MAG = 1000000;
    protected POS: PosData[] = [
        {name: 'NW', longtitude: 120278193, latitude: 22626435},
        {name: 'NE', longtitude: 120289608, latitude: 22620788},
        {name: 'E', longtitude: 120290001, latitude: 22618819},
        {name: 'SE', longtitude: 120287741, latitude: 22613545},
        {name: 'S', longtitude: 120276300, latitude: 22618984},
        {name: 'SW', longtitude: 120274065, latitude: 22619316},
        {name: 'W', longtitude: 120274107, latitude: 22620061},
    ];
    private LINE: LineData[] = [
        {pos1: 'NW', pos2: 'NE', side: 0},
        {pos1: 'NE', pos2: 'E', side: 0},
        {pos1: 'E', pos2: 'SE', side: 1},
        {pos1: 'SE', pos2: 'S', side: 1},
        {pos1: 'S', pos2: 'SW', side: 1},
        {pos1: 'SW', pos2: 'W', side: 0},
        {pos1: 'W', pos2: 'NW', side: 0}
    ];
    private inArea(lineData: LineData):boolean {
        let pos1x = 0;
        let pos1y = 0;
        let pos2x = 0;
        let pos2y =0;
        for(let i=0; i<this.POS.length; i++){
            const element: PosData = this.POS[i];
            if(element.name==lineData.pos1){
                pos1x = element.longtitude;
                pos1y = element.latitude;
            }
            if(element.name==lineData.pos2){
                pos2x = element.longtitude;
                pos2y = element.latitude;
            }
        }
        console.log((this.lat-((pos2y-pos1y)/(pos2x-pos1x))*this.lot-((pos2x*pos1y-pos1x*pos2y)/(pos2x-pos1x))));
        if(lineData.side==1){
            if((this.lat-((pos2y-pos1y)/(pos2x-pos1x))*this.lot-((pos2x*pos1y-pos1x*pos2y)/(pos2x-pos1x)))>=0){
                return true;
            }else{
                return false;
            }
        }else{
            if((this.lat-((pos2y-pos1y)/(pos2x-pos1x))*this.lot-((pos2x*pos1y-pos1x*pos2y)/(pos2x-pos1x)))<=0){
                return true;
            }else{
                return false;
            }
        }
    }
    protected lot = 0;
    protected lat = 0;
    public getPosition(longtitude: string, latitude: string): boolean {
        this.lot = +longtitude * this.MAG;
        this.lat = +latitude * this.MAG;
        console.log(this.lot, this.lat);
        for(let i=0; i<this.LINE.length; i++){
            console.log(this.LINE[i]);
            if(this.inArea(this.LINE[i])==false){
                return false;
            }
        }
        return true;
    }
}