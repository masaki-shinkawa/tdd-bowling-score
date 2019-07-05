const MAX = 10; // スコア最大値
const FRAME = 10; // フレーム数

export const createFrameScore = () => {
	const first = Math.floor(Math.random() * (MAX + 1));
	const second = Math.floor(Math.random() * (MAX - first))
	return [first, second];
};

export const createGameScore = () => {
	const frames = []
	for (let frame = 0; frame < FRAME; frame++) {
		frames.push(createFrameScore());
	}
	return frames;
};

export const sumFrameScore = (prevFirst, prevSecond, currentFirst, currentSecond) => {
	// ストライク
	if (currentFirst === MAX) {
		return prevFirst + prevSecond + currentFirst + currentSecond;
	}
	// スペア
	if ((currentFirst + currentSecond) === MAX) {
		return prevFirst + currentFirst + currentSecond;
	}
	// それ以外
	return currentFirst + currentSecond;
}

export const updateBowlingScoreHistory = (prevFirst, prevSecond, currentFirst, currentSecond) => {
	// ストライク
	if (currentFirst === MAX) {
		return [currentFirst, prevFirst];
	}
	// スペア
	return [currentFirst, currentSecond];
}

export const sumGameScore = (gameScores) => {
	return gameScores.reduce((prev, curr) => {
		return prev + curr;
	}, 0);
}

export const incrementFrameScore = (scores) => {
	let prevScores = [0, 0];
	return scores.map(frameScore => {
		const incrementScore = sumFrameScore(...prevScores, ...frameScore);
		prevScores = updateBowlingScoreHistory(...prevScores, ...frameScore);
		return incrementScore;
	});
}

export const run = () => {
	const reverseScores = createGameScore().reverse();
	console.log("投球スコア", JSON.stringify(reverseScores));
	const frameScores = incrementFrameScore(reverseScores);
	console.log("フレームごとのスコア", JSON.stringify(frameScores));
	const gameScores = sumGameScore(frameScores);
	console.log("ゲーム全体のスコア", gameScores)
	return gameScores;
};
