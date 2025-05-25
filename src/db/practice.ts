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
    title: "Xe mô tô (tàu lửa, xe ô tô,...) chạy",
    description:
      "Bài tập Scratch Tiểu học viết chương trình mô tả hình ảnh chiếc xe ô tô đang chạy trên màn hình hiển thị theo chiều từ trái qua phải. Khi gặp cạnh phải thì cho Open lại từ hướng bên trái rồi chạy liên tục.",
    image: "https://s3.icankid.io/icantech/cms/Dua_xe_68a4035a93.png",
    content: [
      "Đây là bài tập Scratch đơn giản nhưng cũng có thể phát triển lên thành bài toán cho các 3 đối tượng tiểu học, Trung học cơ sở và Trung học phổ thông theo các level khác nhau.",
      "\t- Level 1: Yêu cầu chiếc xe ô tô di chuyển không yêu cầu lăn bánh.",
      "\t- Level 2: Yêu cầu  xe ô tô di chuyển có lăn bánh nhưng không yêu cầu thân xe chuyển động (tức là đứng yên).",
      "\t- Level 3: Khi di chuyển trên đường gồ ghề thì phần bánh và thân xe có xóc.",
      "Với dạng bài tập lập trình Scratch Tiểu học này thì bạn hãy tìm cách để xe chạy trông thật tự nhiên thì càng tốt. Nếu như bạn không thích hình ảnh xe ô tô thì có thể thay thế bằng xe máy, máy bay, thuyền,...tuỳ thuộc vào khả năng sáng tạo linh hoạt của bạn.",
    ],
  },
  {
    title: "Bài tập viết trò chơi chọn màu đúng",
    description:
      "Viết trò chơi chọn màu đúng cũng là một trong những dạng bài Scratch cho học sinh Tiểu học hay mà phụ huynh có thể tham khảo và lựa chọn cho bé luyện tập. Đề bài yêu cầu viết chương trình trên Scratch để mô phỏng trò chơi chọn màu đúng với các dữ liệu",
    image: "https://s3.icankid.io/icantech/cms/Chon_mau_dung_18d5685138.png",
    content: [
      "Chương trình sẽ cho 2 nhân vật chính là Cô Kiều và hình tròn. Hình tròn là nhân vật do bé tự thiết kế với tối thiểu 10 trang phục có màu sắc không giống nhau. Chẳng hạn như các màu: đỏ, xanh lá cây, vàng, cam, tím, nâu, xanh da trời, hồng, đen, trắng.",
      "Trong lúc chơi, cô Kiểu sẽ đặt các câu hỏi như: “Em hãy náy lên hình tròn màu hồng và bên dưới lần lượt hiển thị 3 hình tròn với các màu khác nhau. Các câu hỏi cũng sẽ được tạo ra với các đáp án ngẫu nhiên.",
    ],
  },
  {
    title: "Trò chơi đoán số",
    description:
      "Một dạng bài tập Scratch tiểu học có lời giải khá phổ biến đó là trò chơi đoán số. Với dạng bài này, nhiệm vụ của các bé là lập trình Scratch để mô phỏng lại tro chơi đoán số theo các yếu tố sau",
    image: "https://i.ytimg.com/vi/_oeUs7yNug8/maxresdefault.jpg",
    content: [
      "Cô giáo là nhân vật chính và sẽ nghĩ ra một số và yêu cầu các em phải đoán được số đó bằng thao tác nhập các số từ bàn phím cho đến khi đoán ra được thì thôi.",
      "\t- Lúc bắt đầu trò chơi thì cô giáo sẽ giới thiệu giống như hình bên trên và các bé sẽ bắt đầu dự đoán con số.",
      "\t- Khi bé đoán trùng với các con số đã đoán trước đó thì cô giáo sẽ thông báo: “Con số này em đã đoán rồi, vậy nên hãy đoán số khác”.",
      "\t- Khi bé dự đoán sai thì cô giáo sẽ thông báo: “Em đoán sai rồi. Số em đoán lớn hơn/nhỏ hơn số của cô nên em đoán lại đi nhé!”.",
      "Khi bé đoán đúng thì cô giáo sẽ thông báo số của cô cũng như số lần mà bé đã dự đoán. Chẳng hạn như: “Đúng rồi 30. Em đã đoán đúng số của cô sau 4 lần dự kiến”.",
    ],
  },
];
