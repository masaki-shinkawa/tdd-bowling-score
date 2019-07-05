import * as BowlingScore from "@/bowlingScore";

describe("bowlingScore#createFrameScore", () => {
	it("10,000回実行して全て合計が0〜10以内", () => {
		const summary = {}
		for (let i = 0; i < 10000; i++) {
			const scores = BowlingScore.createFrameScore();
			const frameScore = scores[0] + scores[1];
			summary[frameScore] = summary[frameScore] ? summary[frameScore] + 1 : 1;
			expect(frameScore >= 0 && frameScore <= 10).toBeTruthy();
		}

		expect(summary["0"]).toBeGreaterThan(0);
		expect(summary["10"]).toBeGreaterThan(0);
	});
})

describe("bowlingScore#createGameScore", () => {
	it("10,000回実行して全て合計が0〜300以内", () => {
		for (let i = 0; i < 100; i++) {
			const scores = BowlingScore.createGameScore();
			const gameScore = scores.reduce((prev, curr) => (prev + curr[0] + curr[1]), 0);
			expect(gameScore >= 0 && gameScore <= 300).toBeTruthy();
		}
	});
});

describe("bowlingScore#sumFrameScore", () => {
	it("1, 2, 0, 0の場合は0を返却", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 0, 0);
		expect(score).toEqual(0);
	})
	it("1, 2, 9, 0の場合は9を返却", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 9, 0);
		expect(score).toEqual(9);
	})
	it("1, 2, 0, 9の場合は9を返却", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 0, 9);
		expect(score).toEqual(9);
	})
	it("1, 2, 1, 8の場合は9を返却", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 1, 8);
		expect(score).toEqual(9);
	})
	it("1, 2, 8, 1の場合は9を返却", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 8, 1);
		expect(score).toEqual(9);
	})
	it("1, 2, 10, 0の場合は13を返却 // ストライク", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 10, 0);
		expect(score).toEqual(13);
	})
	it("1, 2, 0, 10の場合は11を返却 // スペア", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 0, 10);
		expect(score).toEqual(11);
	})
	it("1, 2, 1, 9の場合は11を返却 // スペア", () => {
		const score = BowlingScore.sumFrameScore(1, 2, 1, 9);
		expect(score).toEqual(11);
	})
});

describe("bowlingScore#updateBowlingScoreHistory", () => {
	it("1, 2, 0, 9の場合は0, 9を返却", () => {
		const score = BowlingScore.updateBowlingScoreHistory(1, 2, 0, 9);
		expect(score).toEqual([0, 9]);
	})
	it("1, 2, 0, 10の場合は0, 10を返却", () => {
		const score = BowlingScore.updateBowlingScoreHistory(1, 2, 0, 10);
		expect(score).toEqual([0, 10]);
	})
	it("1, 2, 10, 0の場合は10, 1を返却", () => {
		const score = BowlingScore.updateBowlingScoreHistory(1, 2, 10, 0);
		expect(score).toEqual([10, 1]);
	})
})

describe("bowlingScore#incrementFrameScore", () => {
	it("フレーム単位の増加分の計算", () => {
		const score = BowlingScore.incrementFrameScore([[6, 3], [9, 0], [0, 3], [8, 2], [7, 3], [10, 0], [9, 1], [8, 0], [10, 0], [10, 0]])
		expect(score).toEqual([9, 9, 3, 10, 18, 20, 20, 8, 18, 28]);
	})
});

describe("bowlingScore#sumGameScore", () => {
	it("ゲーム全体の合計値", () => {
		const score = BowlingScore.sumGameScore([9, 9, 3, 17, 20, 20, 18, 8, 20, 10]);
		expect(score).toEqual(134);
	})
});
