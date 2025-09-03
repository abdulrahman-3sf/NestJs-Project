export interface ITask {
    id: string;
    title: string;
    description: string;
    status: enTaskStatus;
}

export enum enTaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}