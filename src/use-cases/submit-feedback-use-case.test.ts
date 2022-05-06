import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

//function spy
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  //isso deve fazer....
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "test comment",
        screenshot: "data:image/png;base64,duihdiuhwqiudhiu12hiupe2u",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });
});

describe("Submit feedback", () => {
  //isso deve fazer....
  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "test comment",
        screenshot: "data:image/png;base64,duihdiuhwqiudhiu12hiupe2u",
      })
    ).rejects.toThrow();
  });
});

describe("Submit feedback", () => {
  //isso deve fazer....
  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,duihdiuhwqiudhiu12hiupe2u",
      })
    ).rejects.toThrow();
  });
});

describe("Submit feedback", () => {
  //isso deve fazer....
  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "test comment",
        screenshot: "teste.jpg",
      })
    ).rejects.toThrow();
  });
});
