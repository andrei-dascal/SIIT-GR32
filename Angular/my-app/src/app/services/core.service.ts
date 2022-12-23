import { Injectable } from "@angular/core";
import { Job } from "../models/job.model";

@Injectable({ providedIn: 'root' })
export class CoreService {
    getPreviousJobs(): Job[] {
        //mocked data
        return [];
    }
}