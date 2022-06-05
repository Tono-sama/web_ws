// 他サービスに対してリクエストを投げるIF
export interface OtherServiceHandlerIF {
    request(data: any): any
}