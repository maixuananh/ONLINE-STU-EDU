export interface IGrade {
    gradePointId: string;
    testId: string;
    testedId: string;
    userId: string;
    total: number;
    isPass: number;
    correctCount: number;
    username: string;
}