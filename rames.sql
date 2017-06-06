--
-- Database: `rames`
--

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`ID`, `Name`) VALUES
(1, 'English'),
(2, 'Icelandic');

-- --------------------------------------------------------

--
-- Table structure for table `question_checkbox_choices`
--

CREATE TABLE `question_checkbox_choices` (
  `ID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Choice` varchar(255) NOT NULL,
  `Textbox` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_checkbox_choices`
--

INSERT INTO `question_checkbox_choices` (`ID`, `QuestionID`, `Choice`, `Textbox`) VALUES
(1, 23, 'User tasks', 'n'),
(2, 23, 'Scenarios', 'n'),
(3, 23, 'User instructions', 'n'),
(4, 23, 'Concent form', 'n'),
(5, 23, 'Informative material', 'n'),
(6, 23, 'Not applicable', 'n'),
(7, 23, 'Other material', 'y'),
(8, 25, 'Heuristics list', 'n'),
(9, 25, 'Guidelines', 'n'),
(10, 25, 'Standards', 'n'),
(11, 25, 'Other material', 'y'),
(12, 27, 'Usability problems', 'n'),
(13, 27, 'Time on task', 'n'),
(14, 27, 'Completion of tasks', 'n'),
(15, 27, 'Number of mouse clicks', 'n'),
(16, 27, 'User experience', 'n'),
(17, 27, 'Satisfaction', 'n'),
(18, 27, 'Other, please describe', 'y'),
(19, 31, 'Writing notes', 'n'),
(20, 31, 'Video recordings', 'n'),
(21, 31, 'Voice recordings', 'n'),
(22, 31, 'Logging all activity', 'n'),
(23, 31, 'Other, please specify:', 'y'),
(24, 36, 'Command line', 'n'),
(25, 36, 'Graphical user interface', 'n'),
(26, 36, 'Web interface', 'n'),
(27, 36, 'Multimedia', 'n'),
(28, 36, 'Virtual reality', 'n'),
(29, 36, 'Speech interaction', 'n'),
(30, 36, 'Touch interaction', 'n'),
(31, 36, 'Pen interaction', 'n'),
(32, 36, 'Air-based gestures', 'n'),
(33, 36, 'Haptic', 'n'),
(34, 36, 'Multimodal', 'n'),
(35, 36, 'Tangible', 'n'),
(36, 36, 'Augmented and mixed reality', 'n'),
(37, 36, 'Wearable', 'n'),
(38, 36, 'Robot and drones', 'n'),
(39, 36, 'Brain-computer interaction', 'n'),
(40, 37, 'Business system', 'n'),
(41, 37, 'Game', 'n'),
(42, 37, 'Social networking system', 'n'),
(43, 37, 'Information retrieval system', 'n'),
(44, 37, 'Other, please specify', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `question_dropdown_choices`
--

CREATE TABLE `question_dropdown_choices` (
  `ID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Choice` varchar(255) NOT NULL,
  `Cond` varchar(255) NOT NULL DEFAULT 'n',
  `Textbox` varchar(255) NOT NULL DEFAULT 'n'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_dropdown_choices`
--

INSERT INTO `question_dropdown_choices` (`ID`, `QuestionID`, `Choice`, `Cond`, `Textbox`) VALUES
(1, 20, 'Think aloud user testing', 'y', 'n'),
(2, 20, 'Formal user testing (not think aloud)', 'y', 'n'),
(3, 20, 'Informal testing with users (almost like an interview)', 'y', 'n'),
(4, 20, 'Other evaluation type including users', 'y', 'n'),
(5, 20, 'Prototype interviews', 'y', 'n'),
(6, 20, 'Heuristic evaluation', 'n', 'n'),
(7, 20, 'Cognitive walkthrough', 'n', 'n'),
(8, 20, 'Peer review', 'n', 'n'),
(9, 20, 'Other expert evaluation', 'n', 'y'),
(10, 38, 'Paper prototype', 'n', 'n'),
(11, 38, 'Wireframe', 'n', 'n'),
(12, 38, 'Conceptual design', 'n', 'n'),
(13, 38, 'Detailed design', 'n', 'n'),
(14, 38, 'Other, please specify', 'n', 'y');

-- --------------------------------------------------------

--
-- Table structure for table `question_radio_choices`
--

CREATE TABLE `question_radio_choices` (
  `ID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Choice` varchar(255) NOT NULL,
  `Textbox` varchar(255) NOT NULL DEFAULT 'n'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `question_radio_choices`
--

INSERT INTO `question_radio_choices` (`ID`, `QuestionID`, `Choice`, `Textbox`) VALUES
(1, 15, 'Redesign', 'n'),
(2, 15, 'Assess the success of a running product', 'n'),
(3, 15, 'Both', 'n'),
(4, 15, 'Other', 'n'),
(5, 26, 'Qualitative', 'n'),
(6, 26, 'Quantitative', 'n'),
(7, 26, 'Both', 'n'),
(8, 30, 'In real settings', 'n'),
(9, 30, 'In controlled settings', 'n'),
(10, 30, 'Other', 'n');

-- --------------------------------------------------------

--
-- Table structure for table `rames_category`
--

CREATE TABLE `rames_category` (
  `ID` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `info` text NOT NULL,
  `languageID` int(11) NOT NULL,
  `sequenceNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rames_category`
--

INSERT INTO `rames_category` (`ID`, `category`, `info`, `languageID`, `sequenceNumber`) VALUES
(1, 'Roles', 'In the RAMES framework the roles that people involved have are: (R1) Users, (R2) Evaluators, (R3) Observers, and (R4) Recipients.', 1, 1),
(2, 'Activities', 'In the RAMES framework activities are constituted by the (A1) Stating the purpose of the evaluation, (A2) Timing of the evaluation, (A3) Conducting evaluation, (A4) Analysing the results and (A5) Making decisions.', 1, 2),
(3, 'Materials', 'In the RAMES framework the materials elements are four: (M1) Evaluation material, (M2) Support material, (M3) Data gathered, (M4) Results that will be described below.', 1, 3),
(4, 'Environment', 'In the RAMES framework the environment and equipment elements are four: (E1) Evaluation environment, (E2) Equipment for the evaluation, (E3) Equipment for data gathering, (E4) Equipment for analysing the results that will be described below.', 1, 4),
(5, 'Software', 'Software is defined as set of computer programs, procedures and associated documentation and data according to ISO 12207 (2008). The software has various characteristics, such as name, version and interaction style. When evaluated the software can have various stages of design, it can be of various types and some part of the software could be implemented and some not.The status of these three attributes influences the evaluation and what methods can be used to evaluate the software. In the RAMES framework the software elements are four: (S1) Characteristics, (S2) Type, (S3) Stage of design and (S4) Part of software evaluated.', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `rames_info`
--

CREATE TABLE `rames_info` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Info` text NOT NULL,
  `QuestionExplanation` text NOT NULL,
  `LanguageID` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rames_info`
--

INSERT INTO `rames_info` (`ID`, `Name`, `Info`, `QuestionExplanation`, `LanguageID`, `CategoryID`) VALUES
(1, 'R1 User', 'In empirical evaluation, participants take part in the evaluation. The participants can be the actual users or expected actual users of the software or user surrogates, meaning participants that will not be using the system, but pretend they are users. In analytical evaluation, users do not participate, but the evaluator should have their characteristics in mind while evaluating.', 'Users are the participants that take part in the evaluation. The participants can be actual users, expected actual users of the IT system, or user surrogates (meaning participants who will not be using the system, but during the evaluation they will play the role of users). In analytical evaluation, users do not participate, but the evaluator should have their characteristics in mind while evaluating.', 1, 1),
(2, 'R2 Evaluator', 'The evaluator plans the evaluation, conducts it and has a major role while analysing the data to describe the results from the evaluation. During the evaluation the evaluator manages the different activities and keeps track of what happens during the evaluation. The activities that the evaluator conducts depents on the chosen evaluation method.', 'The evaluator plans the evaluation, conducts it, and has a major role while analysing the data to describe the results from the evaluation. During the evaluation, the evaluator manages the different activities and keeps track of what happens during the evaluation. The activities, that the evaluator conducts depends on the chosen evaluation method.', 1, 1),
(3, 'R3 Observers', 'Sometimes IT professionals and representatives from the client observe when an empirical evaluation is conducted. That experience can give valuable information for deciding how to react to the results of the evaluation.', 'The observers are persons that do not interact with the participants in an evaluation, but observe what happens. Sometimes IT professionals and representatives from the client observe when a user evaluation is conducted and sometimes the observers are note takers and take part in discussing the outcome of the evaluation. That experience can give valuable information for deciding how to react to the results of the evaluation.', 1, 1),
(4, 'R4 Recipients', 'It depends on the evaluation purpose what the roles of the IT professionals receiving the results from the evaluation are. Sometimes it is the evaluator who conducted the evaluation that uses the results and decides actions and sometimes the results are handed over to a person, having another role, who decides how to react to the results of the evaluation.', 'Recipients are the ones that receive the results of the evaluation. It depends on the evaluation purpose what the roles of the IT professionals receiving the results from the evaluation are. Sometimes it is the evaluator who conducted the evaluation that uses the results and decided actions. At other times, the results are handed over to persons, having a different role, who decided how to respond to the results of the evaluation.', 1, 1),
(5, 'A1 Stating the purpose of the evaluation', 'The purpose of the evaluation describes why the evaluation is conducted. There are mainly two categories of evaluation, either usability is measured or the user experience. In some cases usability and user experience is measured in the same evaluation. Additionally, there are mainly two categories for how the measurements are used,  either the results are used to give developers feedback on their current version of the user interface design which is still under construction, called formative evaluation or the results are used to assess the success of a finished product called summative evaluation (Preece et. al., 2002). The choice of the evaluation method depends vastly on the goal of the evaluation. Additionally, feedback on new user requirements and of the context of use could be gathered.', 'The purpose of the evaluation describes why it is conducted. There are mainly two categories of evaluation, either usability is measured or the user experience (see M3). In some cases usability and user experience is measured in the same evaluation. Additionally, there are mainly two categories of how the measurements are used, either the results are used to give developers feedback on their current version of the user interface design which is still under construction (called formative evaluation) or the results are used to assess the success of a finished product (called summative evaluation) (see M4). If, the goal is to conduct evaluation to check a particular hypothesis, it should be stated in this section. The choice of the evaluation method, (see A3) depends heavily on the aim of the evaluation, the stage of the design and the part of the IT system being evaluated (see S3 and S4).', 1, 2),
(6, 'A2 Timing of the evaluation', 'The evaluation needs to be scheduled. The time and duration of the evaluation needs to be decided.', 'The performance of the evaluation needs to be planned. This includes: Scheduling activities regarding the involvement of participants; the time; the duration, and locality for carrying out the activity of the evaluation.', 1, 2),
(7, 'A3 Proceeding evaluation', 'Evaluation is often proceeded by using a described evaluation method which is a collection of particular subtasks. These subtasks should be conducted during the user centred evaluation activity to be able to say that a particular evaluation method has been used. Some authors categorize the methods according to whether users participate in the evaluation, so called empirical methods, and methods that do not involve users, so called analytical methods (Whitefield et al. 1991, Barkhuus and Rode 2007). Knowing what evaluation method will be used is important when planning the evaluation. Sometimes evaluation is conducted in an informal way, where there is not any particular method used for conducting the evaluation.', 'Evaluation is often conducted by using a described evaluation method or a procedure which is a collection of particular tasks. These tasks should be conducted during the user-centred evaluation activity to be able to say that a particular evaluation method has been used. Knowing which evaluation method will be used is essential when planning the evaluation. Sometimes evaluation is conducted in an informal way, where there is not any particular method used for conducting the evaluation and an informal procedure is followed.', 1, 2),
(8, 'A4 Analysing the results', 'When the data has been gathered it needs to be analysed and the results described. Sometime equipment is used to support this activity or some described method.', 'When data has been gathered, it needs to be analysed and the results described. The activity of analysing the data could be conducted in a group of people or several evaluators analyse the data individually and afterwards gather the results. Sometimes specialized analytical methods are used for this activity.', 1, 2),
(9, 'A5 Making decisions', 'The recipients of the results from the evaluation need to decide what actions to take on the results. Sometimes it is decided to redesign according to the results, sometimes the help provided in the software is extended, and sometimes no action is taken. Note that when these activities are described the outcomes of the activities are also mentioned.', 'The recipients of the results from the evaluation need to decide what actions to take on the results. Sometimes it is decided to redesign according to the results, sometimes the help functions provided in the IT system are extended, and sometimes no action is taken. If no action is taken, the reason should be clearly motivated.', 1, 2),
(10, 'M1 Evaluation material', 'In empirical evaluation it is very common to use user tasks, that the participants are asked to perform during the evaluation. In other cases, scenarios could be used and instructions on what to do in the evaluation could be given. Additional material presented to the participants could be a consent form and documents describing the goal of the evaluation. During analytical evaluation, guidelines and standards could be used. The inspection method is often identified by the material used, like heuristic evaluation and standards inspection.', 'In empirical evaluation it is common to select user tasks, which the participants are asked to perform during the evaluation. In other cases, scenarios could be used and instructions for the participants on what to do in the evaluation could be given. Additional material presented to the participants could be a consent form and documents describing the goal of the evaluation.', 1, 3),
(11, 'M2 Support material', 'The subtasks that need to be achieved while using the method could be described in a written document to support the evaluators when using the method. In addition, training and tutorial support on the evaluation method could be used during the evaluation.', 'The material used in evaluations to support the process of the evaluation should be described. The tasks that need to be achieved by the evaluator while using the method could be described in a written document to support the evaluators when using the method. In addition, training and tutorial support on the evaluation method could be used during the evaluation. During analytical evaluation, heuristics, guidelines and standards could be used. The inspection method is often identified by the material used, like heuristic evaluation and standards inspection.', 1, 3),
(12, 'M3 Data Gathered', 'The data gathered in the user centred evaluation could be both quantitative and qualitative feedback on the usability and the user experience of using a particular design. Additionally, feedback on new user requirements and the context of use can be gathered. Usually there is some equipment used to gather the data.', 'The data gathered in the user-centred evaluation could be both quantitative and qualitative feedback on the usability and the user experience for a particular design. If particular metrics are used in the software development, data should be gathered to check these metrics in the evaluation and if hypotheses are put forward in the goal of the evaluation, data should be gathered to be able to test the hypothesis (see A1). Additionally, feedback on new user requirements and context of use can be gathered. Usually there is some equipment used to gather the data.', 1, 3),
(13, 'M4 Results', 'The results of the evaluation depend on the purpose of the evaluation and the method selected. The gathered data is analysed, interpreted and results are presented. A common way of describing results of evaluation in research studies is to count usability problems. The results are used for making decisions on how to respond to the results.', 'The results of the evaluation depend on the purpose of the evaluation (A1) and the method selected (A3). The gathered data is analysed, interpreted and results are presented. A common way of describing results of evaluation in research studies is to show the total number usability problems and their severity, but sometimes other results are described like average time on tasks, total number of mouse clicks and overview of number of tasks solved. The results are used for making decisions on how to respond to the results. The results in research studies can be descriptive showing a sum, a mean or frequencies of data or the results can be more explanatory by analysing the data with statistical methods like t-tests, ANOVA and correlations. Results in practical settings are much less formal often described orally, or by notes from the evaluation.', 1, 3),
(14, 'M5 Decisions', 'The recipients of the results from the evaluation need to decide what actions to take on the results. Sometimes it is decided to redesign according to the results, sometimes the help provided in the software is extended, and sometimes no action is taken.', 'The format of the decisions made by the recipients of the results from the evaluation (A5) are documented in this element. Sometimes it is decided to redesign according to the results, sometimes the help provided in the IT system is extended, and sometimes no action is taken.', 1, 3),
(15, 'E1 Evaluation environment', 'An evaluation can take place in various surroundings. One possibility is conducting an empirical evaluation in the real settings, often called in the field, where the software is actually used. Evaluation can be conducted in more controlled environment like in a usability laboratory. Expert evaluation often takes place in the development environment.', 'An evaluation can take place in various surroundings. One possibility is conducting an empirical evaluation in the real settings, (often called “in the field”), where the IT system is actually used. Evaluation can be conducted in a more controlled environment such as a usability laboratory. Expert evaluation often takes place in the development environment.', 1, 4),
(16, 'E2 Equipment to use the software', 'The equipment used in the evaluation to illustrate the software can have many forms. One example is using a computer to run a detailed design; another is using foam to illustrate a computer or a phone.', 'Data could be gathered in the evaluation by writing notes, video recording, voice recording and by logging IT systems’ usage, to name the most common ones.', 1, 4),
(17, 'E3 Equipment for data gathering', 'Data could be gathered in the evaluation by writing notes, video recording, voice recording and by logging software usage to name the most common ones.', 'The data could be analysed in various ways, using a software tool to support this or the data could be analysed using pen and paper.', 1, 4),
(18, 'E4 Equipment for analysing the data', 'The data could be analysed in various ways, using software to support this or analysis on paper.', 'The equipment or hardware used in the evaluation to show and realize the system can have many forms. One example is using a computer to run a detailed design; another extreme is using foam that paper prototypes are attached to for making the paper prototypes more real for the participants in the evaluation.', 1, 4),
(19, 'S1 Characteristics', 'The software has some characteristics like name, version and interaction style that should be described.', 'The system has some characteristics like name, version and interaction style that should be described. A reference to where the system can be reached could be given here. For a paper prototype, this could be a reference to where the version being evaluated is stored and for a running web solution this could be a link to the evaluated version of the system.', 1, 5),
(20, 'S2 Type', 'The type of the software describes what the main field for using the software is. Some examples are business software, a game, social networking software and information retrieval software. The type of the software can influence what evaluation methods can be used and the measurements that can be gathered during the evaluations. Main functionality is often used to describe the type of the software.', 'The type of the system describes what the main field for using the system is and typically the main functionality is used to describe the type. Some examples are business systems, games, social networking systems, and information retrieval systems. The type of the system can influence what evaluation methods can be used (A3) and the measurements that can be gathered during the evaluations (A4).', 1, 5),
(21, 'S3 Stage of design', 'The software being evaluated could have various stages of design. It can be low fidelity prototype on paper of the first ideas of the software; it can be detailed designed in a tool or something there in between. The stage of the design of the software can constrain how the evaluation is conducted.', 'The system that is evaluated could be in various stages of design. It can be a low fidelity prototype on paper showing the first design concepts of the system; a detailed designed running prototype, or something there in between. The stage of the design of the system can constrain how the evaluation can be conducted, the purpose of the evaluation and the choice of the evaluation method.', 1, 5),
(22, 'S4 Part of software', 'It needs to be clear what parts of the software are being evaluated during the evaluation. Sometimes a prototype illustrates a small part of the software, sometimes the prototype is extensive and sometimes all the software is designed and could be evaluated. The elements of RAMES framework can vary vastly while conducting user-centred evaluation. In informal evaluation a few evaluators could evaluate wireframe sketches of a particular part of the software in a peer review manner for gathering feedback on the current design, and redesign according to the results. The RAMES framework could be used to describe that evaluation, to be able to refer to how it was conducted later. Researchers could use the RAMES framework to plan formal summative evaluation while conducting a study to check if all aspects have been taken care of. Furthermore, researchers can use the RAMES framework to describe their evaluation in a research paper.', 'It needs to be clear what parts of the system are being evaluated during the evaluation. Sometimes a small part of the system is ready for evaluation, sometimes a more extensive part is ready, and sometimes the whole system could be evaluated.', 1, 5);

-- --------------------------------------------------------

--
-- Table structure for table `rames_picture`
--

CREATE TABLE `rames_picture` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rames_questions`
--

CREATE TABLE `rames_questions` (
  `ID` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `Question` varchar(255) NOT NULL,
  `Suggestion` text NOT NULL,
  `QuestionNr` varchar(10) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `LanguageID` int(11) NOT NULL,
  `RamesInfoID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rames_questions`
--

INSERT INTO `rames_questions` (`ID`, `CategoryID`, `Question`, `Suggestion`, `QuestionNr`, `Type`, `LanguageID`, `RamesInfoID`) VALUES
(1, 1, 'Users in evaluation:', 'Conducting evaluation with users, could range from asking 2 or 3 users to participate to asking over 10 people. Many researchers give the advice that 5 users are enough for finding 80% of the usability problems in the system (eg. Falkner, 2003 ). The suggested number of participants depends highly on the goal of the testing, the individual differences between the test users, the tool tested, and the tasks performed during testing. ', '1', 'num', 1, 1),
(2, 1, 'For each user:', 'Conducting user evaluations with representative users is recommended. According the Bygstad et al. (2008)  evaluations conducted with arbitrary selected users or employees are concidered to be less important by the recipients of the evaluation results.', '2', 'none', 1, 1),
(3, 1, 'What is the background of the participant?', '', '2a', 'text', 1, 1),
(4, 1, 'Is the background of the participant representative for a user group of the system?', '', '2b', 'yesno', 1, 1),
(5, 1, 'If yes – decribe the user group that this participant is representative for?', '', '2c', 'text', 1, 1),
(6, 1, 'How many evaluators will be included?', 'The outcome of the evaluation depend on the knowledge and experience of the evaluators. Molich et al.   showed that the assumption that if evaluators use the same method they will obtain the same results is plainly wrong. In their study of nine industrial organizations, the evaluators found 310 different usability problems in total and only two problems were reported by six or more organizations, while 75% of the problems were uniquely reported. Hertzum and Jacobsen  state that it is important that the evaluators have necessary knowledge of the factors involved in the evaluations, particularly the evaluation method used and the users’ tasks.', '1', 'num', 1, 2),
(7, 1, 'For each evalutor:', 'The same advice will be used as for the number of evaluators.', '2', 'none', 1, 2),
(8, 1, 'What is the background of the evaluator?', '', '2a', 'text', 1, 2),
(9, 1, 'Does the evaluator have a good knowledge of the evaluation method?', '', '2b', 'yesno', 1, 2),
(10, 1, 'Does the evaluator have a good knowledge of the user tasks?', '', '2c', 'yesno', 1, 2),
(11, 1, 'How many observers will be included?', 'There are mainly two types of observers, those taking notes during the evaluation and thereby assisting with the evaluation process and those observing for learning about the usage of the system they are involved in developing. Having observers taking notes is advised, if there is not much recording done in the evaluation. Also it can be valuable for the evaluator to discuss the observed usage of the system with the note taker. Inviting developers to observe user testing can extend their understanding of the usage of the system vastly.', '1', 'num', 1, 3),
(12, 1, 'For each observer:', 'The same advice will be used as for the number of evaluators.', '2', 'none', 1, 3),
(13, 1, 'What is the role of the observer?', '', '2a', 'text', 1, 3),
(14, 1, 'Who are the recipients?', 'Recipients are the ones that receive the results of the evaluation. It depends on the evaluation purpose what the roles of the IT professionals receiving the results from the evaluation are. Sometimes it is the evaluator who conducted the evaluation that uses the results and decided actions. At other times, the results are handed over to persons, having a different role, who decided how to respond to the results of the evaluation.', '1', 'text', 1, 4),
(15, 2, 'The goal of the evaluation is to use the results for:', '', '1', 'radio', 1, 5),
(16, 2, 'If not applicable, why is that:', '', '2', 'text', 1, 5),
(17, 2, 'Evaluation dates:', 'When planning the evaluation you should insert the estimated values. When the evaluation has been conducted you should insert the exact values here. It is recommended that you don’t estimate more than one and a half hours for each user, if you are conducting evaluation with users.', '1', 'text', 1, 6),
(18, 2, 'Duration:', '', '2', 'num', 1, 6),
(19, 2, 'Evaluation method:', 'Formal usability evaluation has been rated as an effective method by IT professionals, but still these are commonly only used once or twice a year (Jia, Larusdottir, & Cajander, 2012). Furthermore, Bak et al. (2008) and Ardito et al. (2011) states that it is hard for IT professionals to predict how actual users will experience the IT systems’ usage. Formal user evalution are highly rated method for understanding users and their needs.', '1', 'none', 1, 7),
(20, 2, 'User included in the evaluation?', '', '1a', 'conditionalyesnotext', 1, 7),
(21, 2, 'Analysis of the data:', 'When planning the evaluation you should describe how you plan to do this. When the evaluation has been conducted you should describe how the data was analysed, if it was a group activity or done individually. Also, if there were some tools used for the analysis. Note that the format of the results is described in M4.', '1', 'text', 1, 8),
(22, 2, 'What will the results be used for?', '', '1', 'text', 1, 9),
(23, 3, 'Evaluation material:', '', '1', 'checkbox', 1, 10),
(24, 3, 'Support material:', '', '1', 'text', 1, 11),
(25, 3, 'If users were not included:', '', '2', 'checkbox', 1, 11),
(26, 3, 'Data is:', '', '1', 'radio', 1, 12),
(27, 3, 'Data is gathered on:', '', '2', 'checkbox', 1, 12),
(28, 3, 'How will the results be described:', '', '1', 'text', 1, 13),
(29, 3, 'How will the decisions be described:', '', '1', 'text', 1, 14),
(30, 4, 'Where will the evaluation be conducted:', 'The environment in which the evaluation is conducted affects the outcome of using a particular evaluation method. Duh, Tan and Chen, (2006) claimed that significantly more usability problems were found in the field than in the laboratory setting, and the field setting revealed problems with interaction style and cognitive load that were not identified in the laboratory.', '1', 'radio', 1, 15),
(31, 4, 'Data gathered by:', '', '1', 'checkbox', 1, 16),
(32, 4, 'What equipment will be used for data analysis:', '', '1', 'text', 1, 17),
(33, 4, 'What equipment will be used to use the system during the evaluation:', '', '1', 'text', 1, 18),
(34, 5, 'Name of the system:', '', '1', 'text', 1, 19),
(35, 5, 'Version:', '', '2', 'text', 1, 19),
(36, 5, 'Interaction style:', '', '3', 'checkbox', 1, 19),
(37, 5, 'Type of system:', '', '1', 'checkbox', 1, 20),
(38, 5, 'What is the status of the design of the system:', 'Lim et. al., (2006) compared the types of usability problems that can be found in three types of prototyping techniques - a paper based, computer-based, and a fully functional one. The results show that the unique characteristics of each different prototype affect the usability evaluation. More detailed problems were found in the detailed version than in the paper prototype version.', '1', 'dropdown', 1, 21);

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

CREATE TABLE `reports` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `ReportTypeID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reports`
--

-- --------------------------------------------------------

--
-- Table structure for table `reports_info`
--

CREATE TABLE `reports_info` (
  `ID` int(11) NOT NULL,
  `ReportID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Answer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reports_info`
--

-- --------------------------------------------------------

--
-- Table structure for table `reports_type`
--

CREATE TABLE `reports_type` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Token` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Role` varchar(255) DEFAULT NULL,
  `TempToken` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Username`, `Token`, `Name`, `Email`, `Role`, `TempToken`) VALUES
(1, 'holmfridurge 2 updated2', 'fridutoken 2', 'Holmfridur G Einarsd2 ', 'holmfridurge2@gmail.com', 'Scrum master 2', NULL),
(2, 'holmfridurge', 'fridutoken', 'Holmfridur G Einarsd ', 'holmfridurge@gmail.com', 'Scrum master', NULL),

--
-- Indexes for dumped tables
--

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `question_checkbox_choices`
--
ALTER TABLE `question_checkbox_choices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `question_dropdown_choices`
--
ALTER TABLE `question_dropdown_choices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `question_radio_choices`
--
ALTER TABLE `question_radio_choices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rames_category`
--
ALTER TABLE `rames_category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rames_info`
--
ALTER TABLE `rames_info`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rames_picture`
--
ALTER TABLE `rames_picture`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rames_questions`
--
ALTER TABLE `rames_questions`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reports`
--
ALTER TABLE `reports`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reports_info`
--
ALTER TABLE `reports_info`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `reports_type`
--
ALTER TABLE `reports_type`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `question_checkbox_choices`
--
ALTER TABLE `question_checkbox_choices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `question_dropdown_choices`
--
ALTER TABLE `question_dropdown_choices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `question_radio_choices`
--
ALTER TABLE `question_radio_choices`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `rames_category`
--
ALTER TABLE `rames_category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `rames_info`
--
ALTER TABLE `rames_info`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `rames_picture`
--
ALTER TABLE `rames_picture`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `rames_questions`
--
ALTER TABLE `rames_questions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `reports`
--
ALTER TABLE `reports`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `reports_info`
--
ALTER TABLE `reports_info`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1128;
--
-- AUTO_INCREMENT for table `reports_type`
--
ALTER TABLE `reports_type`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
