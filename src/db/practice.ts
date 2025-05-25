import { ImageSourcePropType } from "react-native";

export interface PracticeData {
  ques: string;
  ans: string[];
}

export const practiceData: { [key: string]: PracticeData[] } = {
  easy: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: ["T", "O", "R", "T", "O", "I", "S", "E"],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  medium: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: [
        "S",
        "U",
        "L",
        "C",
        "A",
        "T",
        "A",
        " ",
        "T",
        "O",
        "R",
        "T",
        "O",
        "I",
        "S",
        "E",
      ],
    },
    // {
    //   ques:"Question 1: : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
  hard: [
    {
      ques: "Question 1: Which group of animals Tortoises are: ",
      ans: ["R", "E", "P", "T", "I", "L", "E"],
    },
    {
      ques: "Question 2: Which is the reptile animal that can not swim?: ",
      ans: [
        "S",
        "U",
        "L",
        "C",
        "A",
        "T",
        "A",
        " ",
        "T",
        "O",
        "R",
        "T",
        "O",
        "I",
        "S",
        "E",
      ],
    },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
    // {
    //   ques:"Question : : ",
    //   ans:['','','','','','',''],
    // },
  ],
};
export type Exercise = {
  title: string;
  description: string;
  image: string | ImageSourcePropType;
  content?: string[];
};

export const excercises: Exercise[] = [
  {
    title: "Từ vựng trong tiếng anh",
    description:
      "Bộ bài tập từ vựng tiếng Anh này được thiết kế dành cho người học ở trình độ sơ cấp (A1–A2), giúp bạn làm quen và ghi nhớ các từ vựng thường dùng trong cuộc sống hàng ngày. Thông qua nhiều dạng bài tập phong phú, bạn sẽ rèn luyện khả năng nhận biết từ, hiểu nghĩa, và sử dụng từ vựng đúng ngữ cảnh.",
    image: "practice1.jpg",
    content: [
      "Nội dung gồm có:",
      "\t- Level 1: Chọn nghĩa đúng của từ (Multiple choice)",
      "\t- Level 2: Điền từ vào chỗ trống (Fill in the blanks)",
      "\t- Level 3: Nối từ với hình ảnh hoặc định nghĩa (Matching)",
      "\t- Level 4: Nhóm từ theo chủ đề (Categorizing)",
    ],
  },
  {
    title: "Bài tập ngữ pháp",
    description:
      "Bộ bài tập ngữ pháp này được thiết kế dành cho người học ở trình độ sơ cấp (A1–A2), nhằm giúp củng cố và thực hành các điểm ngữ pháp nền tảng của tiếng Anh. Các bài tập được trình bày theo nhiều dạng khác nhau, giúp người học phát triển tư duy ngữ pháp một cách toàn diện và linh hoạt.",
    image: "practice2.jpg",
    content: [
        "Nội dung gồm có:",
      "\t- Level 1: Sửa lỗi sai (Error correction)",
      "\t- Level 2: Viết lại câu (Sentence transformation)",
      "\t- Level 3: Điền từ đúng vào chỗ trống (Gap-fill)",
      "\t- Level 4: Sắp xếp từ thành câu đúng (Sentence reordering)",
    ],
  },
  {
    title: "Bài tổng hợp",
    description:
      "Bộ bài tập tổng hợp này được thiết kế để giúp người học ở trình độ sơ cấp (A1–A2) rèn luyện và phát triển đồng thời hai kỹ năng nền tảng quan trọng trong tiếng Anh: từ vựng và ngữ pháp.",
    image: "practice3.png",
    content: [
       "Nội dung gồm có:",
      "\t- Level 1: Điền từ đúng vào chỗ trống (Vocabulary + Grammar gap-fill)",
      "\t- Level 2: Chọn đáp án đúng (Multiple choice)",
      "\t- Level 3: Nối câu/ý đúng (Matching)",
      "\t- Level 4: Viết lại câu (Sentence Transformation)",
    ],
  },
];
