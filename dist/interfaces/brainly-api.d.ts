export type SupportedType = "question" | "tbsQuestion";
export type SupportedTypes = SupportedType[];
export interface BrainlyGrade {
    id: number;
    name: string;
}
export interface BrainlySubject {
    id?: number;
    databaseId: number;
    slug?: string;
    name?: string;
}
export interface BrainlySearchResult {
    question: {
        answer: {
            attachments: any;
            author: {
                avatarUrl: string;
                category: number;
                id: number;
                nick: string;
                points: number;
                rank: string;
            };
            best: false;
            commentsCount: number;
            content: string;
            id: number;
            qualityScore: undefined;
            ratesCount: number;
            rating: number;
            thanksCount: number;
            verified: boolean;
        };
        answerCount: number;
        attachments: any;
        content: string;
        grade: BrainlyGrade;
        highlight: {
            contentFragments: string[];
        };
        id: number;
        subject: {
            id: number;
            name: BrainlySubject;
        };
        subjectId: number;
    };
    tags: [];
    type: string;
}
export interface BrainlySearchMetadata {
    answerBot: {
        missingReason: string;
    };
    queryText: string;
    requestId: string;
    requestedTypes: SupportedTypes;
    usedScenario: string;
}
export interface BrainlyPagination {
    cursor: string;
    hasNextPage: boolean;
}
export interface BrainlySearch {
    metadata: BrainlySearchMetadata;
    pagination: BrainlyPagination;
    results: BrainlySearchResult[];
    totalCounts: {
        questionCount: number;
        tbsQuestionCount: number;
    };
}
export interface BrainlyAuthor {
    __typename: string;
    databaseId: number;
    nick: string;
    rank: {
        name: string;
    };
    avatar: {
        thumbnailUrl: string;
    };
}
export interface BrainlyNode {
    databaseId: number;
    content: string;
    author: BrainlyAuthor;
    thanksCount: number;
    isBest: boolean;
    created: Date;
    attachments: any[];
    verification: any;
    comments: {
        count: number;
    };
    rating: number;
    ratesCount: number;
}
export interface BrainlyAnswers {
    data: {
        questionById: {
            databaseId: number;
            content: string;
            points: number;
            grade: BrainlyGrade;
            subject: BrainlySubject;
            author: BrainlyAuthor;
            canBeAnswered: boolean;
            attachments: any[];
            answers: {
                hasVerified: boolean;
                nodes: BrainlyNode[];
            };
        };
    };
}
