export interface IQuestion {
	question: string;
	answer?: string[] | null;
	correctAnswer: string;
	isCorrect?: boolean;
}

export interface ITopic {
	folderName: string;
	topics?: TopicsEntity[] | null;
}
export interface TopicsEntity {
	title: string;
	fileName: string;
	questions?: QuestionsEntity[] | null;
}
export interface QuestionsEntity {
	question: string;
	answer?: string[] | null;
	correctAnswer: string;
}
