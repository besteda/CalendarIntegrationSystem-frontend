export interface AddEventRequest{
userId:number;
title:string;
startDate:Date;
endDate:Date;
}

export interface UpdateEventRequest{
id:number;
userId:number;
title:string;
startDate:Date;
endDate:Date;

}