import React, { useState } from "react";
import SideBar from "../components/SideBar";
import AddChoice from "../components/Modals/AddChoice";
import AddField from "../components/Modals/AddField";
import AddFieldChoice from "../components/Modals/AddFieldChoice";
import Footer from "../components/Footer";
import {
  faUser,
  faCaretDown,
  faCirclePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function JobPositionEdit() {
  const [values, setValues] = useState({
    jobNameAr: "",
    jobNameEn: "",
    location: "",
    cv: "",
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values[e.target.name]);
  };

  // REGULAR QUESTIONS
  const [questionInput, setQuestionInput] = useState("");
  const [questions, setQuestions] = useState([]);

  const questionInputHandler = (e) => {
    setQuestionInput(e.target.value);
  };
  const addQuestion = (e) => {
    if (questionInput !== "") {
      setQuestions([
        ...questions,
        { text: questionInput, id: questions.length },
      ]);
      setQuestionInput("");
    }
    console.log(questions);
  };
  const deleteHandler = (question) => {
    setQuestions(questions.filter((ques) => ques.id !== question.id));
  };

  // MULTI CHOICES QUESTIONS

  const [MCQuestionInput, setMCQuestionInput] = useState("");
  const [MCQuestions, setMCQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [showModal, setShowModal] = useState(false);

  const openModal = (e, questionId) => {
    setSelectedQuestion(questionId);
    setShowModal(true);
  };

  const MCQuestionInputHandler = (e) => {
    setMCQuestionInput(e.target.value);
  };
  const addMCQuestion = (e) => {
    if (MCQuestionInput !== "") {
      setMCQuestions([
        ...MCQuestions,
        {
          text: MCQuestionInput,
          id: MCQuestions.length,
          choices: [],
        },
      ]);
      setMCQuestionInput("");
    }
  };

  const MCQDeleteHandler = (question) => {
    setMCQuestions(MCQuestions.filter((ques) => ques.id !== question.id));
  };

  const choiceDeleteHandler = (choiceId, questionId) => {
    const MCQuestionsCopy = MCQuestions;
    const oldChoices = MCQuestionsCopy[questionId].choices;
    const updatedQuestion = {
      ...MCQuestions[questionId],
      choices: oldChoices.filter((choice) => choice.id !== choiceId),
    };
    setMCQuestions((MCQuestions) =>
      MCQuestions.map((question, i) =>
        i === questionId ? updatedQuestion : question
      )
    );
  };

  //MULTI FIELDS MCQUESTIONS

  const [fieldsMCQuestionInput, setFieldsMCQuestionInput] = useState("");
  const [fieldsMCQuestions, setFieldsMCQuestions] = useState([]);
  const [selectedFieldQuestion, setSelectedFieldQuestion] = useState({});
  const [showFieldModal, setShowFieldModal] = useState(false);

  const [showFieldChoiceModal, setShowFieldChoiceModal] = useState("");
  const [selectedField, setSelectedField] = useState({});

  const openFieldModal = (e, questionId) => {
    setSelectedFieldQuestion(questionId);
    setShowFieldModal(true);
  };

  const openFieldChoiceModal = (e, fieldId, questionId) => {
    console.log("hi" + fieldId);
    setSelectedField(fieldId);
    setSelectedFieldQuestion(questionId);
    setShowFieldChoiceModal(true);
  };

  const fieldsMCQuestionInputHandler = (e) => {
    setFieldsMCQuestionInput(e.target.value);
  };
  const addFieldMCQuestion = () => {
    if (fieldsMCQuestionInput !== "") {
      setFieldsMCQuestions([
        ...fieldsMCQuestions,
        {
          text: fieldsMCQuestionInput,
          id: fieldsMCQuestions.length,
          fields: [],
        },
      ]);
      setFieldsMCQuestionInput("");
    }
  };

  const fieldMCQDeleteHandler = (question) => {
    setFieldsMCQuestions(
      fieldsMCQuestions.filter((ques) => ques.id !== question.id)
    );
  };

  const fieldDeleteHandler = (fieldId, questionId) => {
    const oldFields = fieldsMCQuestions[questionId].fields;
    const updatedQuestion = {
      ...fieldsMCQuestions[questionId],
      fields: oldFields.filter((field) => field.id !== fieldId),
    };
    setFieldsMCQuestions((fieldsMCQuestions) =>
      fieldsMCQuestions.map((question, i) =>
        i === questionId ? updatedQuestion : question
      )
    );
  };

  const fieldChoiceDeleteHandler = (choiceId, fieldId, questionId) => {
    const oldChoices = fieldsMCQuestions[questionId].fields[fieldId].choices;
    const oldFields = fieldsMCQuestions[questionId].fields;
    const updatedField = {
      ...fieldsMCQuestions[questionId].fields[fieldId],
      choices: oldChoices.filter((choice) => choice.id !== choiceId),
    };
    oldFields[fieldId] = updatedField;
    const updatedQuestion = {
      ...fieldsMCQuestions[questionId],
      fields: oldFields,
    };
    setFieldsMCQuestions((fieldsMCQuestions) =>
      fieldsMCQuestions.map((question, i) =>
        i === questionId ? updatedQuestion : question
      )
    );
  };

  return (
    <div className="w-[96%] text-[17px] m-auto mt-6">
      <div className="m-auto mt-6 flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full flex flex-col ml-6 text-[#033362] font-semibold">
          <div className="flex justify-between items-center w-full">
            <div className="px-2">Dashboard</div>
            <div className="px-2">
              <FontAwesomeIcon icon={faComment} />
            </div>
            <div className="px-2">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="w-[65%]">
              <input className="w-full max-w-full bg-[#fff] rounded-full h-8" />
            </div>
            <div className="px-2 min-w-fit">11:11 AM - August 21 ,2022</div>
            <div className="px-2">
              <span className="text-[#00AEEF]">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="bg-[white] h-[694px] mt-4 rounded-xl shadow-[0px_0px_16px_rgb(210,215,211)]">
            <div className="ml-[6.5%] h-[92%] mt-8 scrollbar-thin h-full scrollbar-thumb-[#0388CC] scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
              <div>
                <div className="flex">
                  <div className="w-[90%] mr-[60px] my-[10px]">
                    <label
                      className="text-[14px] font-[400]"
                      htmlFor="job-name-en"
                    >
                      Job Name - EN
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter job name in enlgish"
                      onChange={changeHandler}
                      value={values.jobNameEn}
                      name="jobNameEn"
                      type="text"
                      id="job-name-en"
                    />
                  </div>
                  <div className="w-[90%] mr-[60px] my-[10px]">
                    <label
                      className="text-[14px] font-[400]"
                      htmlFor="job-name-ar"
                    >
                      Job Name - AR
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter job name in arabic"
                      onChange={changeHandler}
                      value={values.jobNameAr}
                      name="jobNameAr"
                      type="text"
                      id="job-name-ar"
                    />
                  </div>
                  <div className="w-[90%] mr-[60px] my-[10px]">
                    <label
                      className="text-[14px] font-[400]"
                      htmlFor="location"
                    >
                      Location
                      <span className="text-[red] font-[700]">*</span>
                    </label>
                    <input
                      className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                      placeholder="Enter job location"
                      onChange={changeHandler}
                      value={values.location}
                      name="location"
                      type="text"
                      id="location"
                    />
                  </div>
                </div>
                <div className="text-[14px] mt-4 text-[#000] font-[400]">
                  <span className="mr-14 text-[14px] text-[#0388CC] font-[700]">
                    CV Required/Not Required:
                  </span>
                  <input
                    className="mr-4"
                    name="cv"
                    onChange={()=>{setValues({...values, cv:'required'}); console.log(values.cv) }}
                    type="radio"
                    id="required"
                  ></input>
                  <label className="mr-14" for="required">
                    Required
                  </label>
                  <input
                    className="mr-4"
                    name="cv"
                    onChange={()=>{setValues({...values, cv:'not-required'}); console.log(values.cv) }}
                    type="radio"
                    id="not-required"
                  ></input>
                  <label className="mr-14" for="not-required">
                    Not Required
                  </label>
                </div>
                <div className="text-[14px] mt-8 text-[#000] font-[400]">
                  <span className="mr-14 text-[14px] text-[#0388CC] font-[700]">
                    Questions:
                  </span>
                  <div className="flex w-full">
                    <div
                      onClick={addQuestion}
                      className="cursor-pointer w-[20%] flex items-center text-[#0388CC] h-[30px] mb-[20px] mt-[10px] text-[13px]"
                    >
                      <div className="mr-2">Add a new question</div>
                      <div className="text-[20px]">
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                    <div className="w-[90%] mr-[60px] my-[10px]">
                      <input
                        className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                        value={questionInput}
                        onChange={questionInputHandler}
                        placeholder="New question"
                        type="text"
                        id="branch-name"
                      />
                    </div>
                  </div>
                  <div>
                    {questions.map((question) => (
                      <div className="w-[95%] mb-2 flex items-center">
                        <div className="w-[95%] flex items-center px-2 mr-6 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                          {question.text}
                        </div>
                        <div
                          className="cursor-pointer text-[red]"
                          onClick={() => {
                            deleteHandler(question);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-[14px] mt-8 text-[#000] font-[400]">
                  <span className="mr-14 text-[14px] text-[#0388CC] font-[700]">
                    Multi Choices Questions:
                  </span>
                  <div className="flex w-full">
                    <div
                      onClick={addMCQuestion}
                      className="cursor-pointer w-[20%] flex items-center text-[#0388CC] h-[30px] mb-[20px] mt-[10px] text-[13px]"
                    >
                      <div className="mr-2">Add a new question</div>
                      <div className="text-[20px]">
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                    <div className="w-[90%] mr-[60px] my-[10px]">
                      <input
                        className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                        value={MCQuestionInput}
                        onChange={MCQuestionInputHandler}
                        placeholder="New question"
                        type="text"
                        id="branch-name"
                      />
                    </div>
                  </div>

                  <div>
                    {MCQuestions.map((question) => (
                      <div className="mb-4">
                        <div className="w-[95%] mb-2 flex items-center">
                          <div className="w-[95%] flex items-center px-2 mr-6 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                            {question.text}
                          </div>
                          <div
                            className="cursor-pointer text-[red]"
                            onClick={() => {
                              MCQDeleteHandler(question);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                        </div>
                        {showModal ? (
                          <AddChoice
                            setMCQuestions={setMCQuestions}
                            MCQuestions={MCQuestions}
                            selectedQuestion={selectedQuestion}
                            setShowModal={setShowModal}
                          />
                        ) : null}
                        <div className="flex">
                          <div
                            onClick={(e) => {
                              openModal(e, question.id);
                            }}
                            className="text-[14] text-[#fff] mr-3 cursor-pointer px-2 h-[30px] flex items-center rounded-md bg-[#0388CC]"
                          >
                            Add choice
                          </div>
                          {question.choices.map((choice) => (
                            <div className="w-fit mb-2 mr-2 flex items-center">
                              <div className="w-fit flex items-center px-2 mr-2 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                                {choice.text}
                              </div>
                              <div
                                className="cursor-pointer mr-6 text-[red]"
                                onClick={() => {
                                  choiceDeleteHandler(choice.id, question.id);
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[14px] mt-8 text-[#000] font-[400]">
                  <span className="mr-14 text-[14px] text-[#0388CC] font-[700]">
                    Multiple-Choice Question With Field To The Answer:
                  </span>
                  <div className="flex w-full">
                    <div
                      onClick={addFieldMCQuestion}
                      className="cursor-pointer w-[20%] flex items-center text-[#0388CC] h-[30px] mb-[20px] mt-[10px] text-[13px]"
                    >
                      <div className="mr-2">Add a new question</div>
                      <div className="text-[20px]">
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>

                    <div className="w-[90%] mr-[60px] my-[10px]">
                      <input
                        className="w-full h-[30px] rounded border-[#c4c8cf] placeholder:text-[center] placeholder:text-[12px] placeholder:font-[400]"
                        value={fieldsMCQuestionInput}
                        onChange={fieldsMCQuestionInputHandler}
                        placeholder="New question"
                        type="text"
                        id="branch-name"
                      />
                    </div>
                  </div>

                  <div>
                    {fieldsMCQuestions.map((question) => (
                      <div className="mb-5">
                        <div className="w-[95%] mb-2 flex items-center">
                          <div className="w-[85.5%] flex items-center px-2 mr-6 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                            {question.text}
                          </div>
                          <div>
                            <div
                              onClick={(e) => openFieldModal(e, question.id)}
                              className="cursor-pointer px-2 w-[125px] justify-center flex items-center mr-6 text-[#0388CC] text-[#0388CC] border-[1px] border-[#0388CC] h-[30px] rounded-md"
                            >
                              Add a field
                            </div>
                          </div>
                          <div
                            className="cursor-pointer text-[red]"
                            onClick={() => {
                              fieldMCQDeleteHandler(question);
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                        </div>
                        {showFieldModal ? (
                          <AddField
                            setFieldsMCQuestions={setFieldsMCQuestions}
                            fieldsMCQuestions={fieldsMCQuestions}
                            selectedFieldQuestion={selectedFieldQuestion}
                            setShowFieldModal={setShowFieldModal}
                          />
                        ) : null}
                        {showFieldChoiceModal ? (
                          <AddFieldChoice
                            setFieldsMCQuestions={setFieldsMCQuestions}
                            fieldsMCQuestions={fieldsMCQuestions}
                            selectedFieldQuestion={selectedFieldQuestion}
                            selectedField={selectedField}
                            setShowFieldChoiceModal={setShowFieldChoiceModal}
                          />
                        ) : null}
                        <div className="w-[95%]">
                          {question?.fields?.map((field) => (
                            <div className="flex mt-3 justify-between">
                              <div className="flex">
                                <div className="w-fit mr-2 flex items-center">
                                  <div className="w-fit font-[700] flex items-center px-2 mr-2 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                                    {field.text}
                                  </div>
                                </div>
                                {field.choices?.map((choice) => (
                                  <div className="flex items-center">
                                    <div className="w-fit flex items-center px-2 mr-2 h-[30px] rounded border-[1px] border-[#c4c8cf] text-[center] text-[12px] placeholder:font-[400]">
                                      {choice.text}
                                    </div>
                                    <div
                                      className="cursor-pointer mr-6 text-[red]"
                                      onClick={() => {
                                        fieldChoiceDeleteHandler(
                                          choice.id,
                                          field.id,
                                          question.id
                                        );
                                      }}
                                    >
                                      <FontAwesomeIcon icon={faTrash} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center">
                                <div
                                  onClick={(e) =>
                                    openFieldChoiceModal(
                                      e,
                                      field.id,
                                      question.id
                                    )
                                  }
                                  className="px-2 cursor-pointer mr-6 w-[125px] justify-center flex items-center bg-[#0388CC] text-[#fff] h-[30px] rounded-md"
                                >
                                  Add a choice
                                </div>
                                <div
                                  className="cursor-pointer text-[red]"
                                  onClick={() => {
                                    fieldDeleteHandler(field.id, question.id);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex mb-2 mt-12 float-right mr-6 pb-[20px] ">
                  <div className="rounded-full text-[13px] mr-2 px-6 py-1 text-[#0388CC] bg-[#E9F6FD]">
                    Cancel
                  </div>
                  <div className="rounded-full text-[13px] px-6 py-1 text-[#fff] bg-[#0388CC]">
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobPositionEdit;
