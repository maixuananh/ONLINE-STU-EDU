export interface ITest {
    de_thi_id: string;
    ten_de_thi: string;
    thoi_gian_lam_bai: number;
    questions: IQuestion[];
}

export interface ITestRaw {
    de_thi_id: string;
    ten_de_thi: string;
    thoi_gian_lam_bai: number;
    isDone?: boolean;
}

export interface IQuestion {
    cau_hoi_id: string;
    noi_dung_cau_hoi: string;
    id_dethi: string;
    dap_an: IAnswer[];
}

export interface IAnswer {
    id_dapan: string;
    id_cauhoi: string;
    is_true: number;
    noi_dung: string;
}

export interface ICreateTest {
    name: string;
    time: number;
    classId: number;
    questions: ICreateTestQuestion[]
}

export interface ICreateTestQuestion {
    content: string;
    dap_an: {
        content: string;
        isTrue: number;
    }[];
}

export interface ISendTested {
    test_id: string;
    answers: {
        answerId: string;
    }[];
    isExpired: boolean;
}

export interface ITestedId {
    id_tested: string;
}