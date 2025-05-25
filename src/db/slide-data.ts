import { ImageSourcePropType } from "react-native";
import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const basic: IData[] = [
  {
    id: 1,
    image: require("../assets/english1.png"),
    title:
      "Bài 1. Lộ Trình Học Tiếng Anh Cho Người Mất Gốc Từ A-Z: Bắt Đầu Từ Con Số 0 Đến Thành Thạo",
    description:
      "Bạn đang loay hoay không biết bắt đầu học tiếng Anh từ đâu? Lộ trình này được thiết kế dành riêng cho người mất gốc, giúp bạn xây dựng lại nền tảng từ con số 0 đến khi có thể nghe – nói – đọc – viết một cách tự tin. Từng bước đi đều được hướng dẫn rõ ràng: từ phát âm, từ vựng cơ bản, ngữ pháp nền tảng cho đến kỹ năng giao tiếp thực tế. Với phương pháp học dễ hiểu và tài liệu phù hợp, bạn hoàn toàn có thể chinh phục tiếng Anh một cách bài bản và hiệu quả.",
    videoUrl: "https://youtu.be/vxKhElc-0eE?si=ghh0ucwV4UQQVtq2",
    content: [
      "Học đều cả 4 kỹ năng: nghe – nói – đọc – viết",
      "Luyện tập mỗi ngày, dù chỉ 15–30 phút",
      "Áp dụng vào thực tế càng sớm càng tốt (giao tiếp, viết, xem video...)",
      "Chia nhỏ mục tiêu, học từ dễ đến khó",
      "Duy trì động lực bằng cách học qua phim, bài hát hoặc chủ đề bạn yêu thích",
    ],
  },
  {
    id: 2,
    image: require("../assets/english2.jpg"),
    title:
      "Bài 2: Tổng Hợp Ngữ Pháp Tiếng Anh Từ Cơ Bản Đến Nâng Cao – Tất Cả Trong Một Tài Liệu",
    description:
      "Hành trình chinh phục ngữ pháp tiếng Anh từ cơ bản đến nâng cao – toàn bộ kiến thức bạn cần trong một tài liệu duy nhất!. Bộ tài liệu này tổng hợp toàn bộ kiến thức ngữ pháp tiếng Anh từ những cấu trúc cơ bản nhất đến các điểm ngữ pháp nâng cao, giúp bạn dễ dàng ôn luyện và nắm vững. Phù hợp với mọi đối tượng học viên từ người mới bắt đầu đến những ai muốn cải thiện kỹ năng ngữ pháp để thi cử, làm việc hay giao tiếp. Mỗi chủ đề được trình bày rõ ràng, có ví dụ minh họa và bài tập thực hành để bạn tự kiểm tra. Đây là “chìa khóa” giúp bạn tự tin sử dụng ngữ pháp tiếng Anh chính xác và linh hoạt.",
    videoUrl: "https://www.youtube.com/watch?v=wVCEjkyj-Nk",
    content: [
      " Cơ bản: Bảng chữ cái, câu đơn giản, thì hiện tại đơn, thì hiện tại tiếp diễn",
      "Trung cấp: Thì quá khứ đơn, thì tương lai, câu điều kiện loại 1 và 2, trạng từ, giới từ",
      "Nâng cao: Câu bị động, mệnh đề quan hệ, câu điều kiện loại 3, câu giả định, cấu trúc đảo ngữ",
      "Cấu trúc câu phức tạp: Mệnh đề danh từ, mệnh đề trạng ngữ, mệnh đề quan hệ rút gọn",
      "Các thì nâng cao: Thì hiện tại hoàn thành tiếp diễn, thì quá khứ hoàn thành, thì tương lai hoàn thành",
      "Câu trực tiếp và gián tiếp, câu tường thuật",
      "Cách dùng động từ khuyết thiếu (can, could, may, might, must, shall, should, will, would)",
      "Phân biệt các loại từ loại: danh từ, động từ, tính từ, trạng từ, đại từ",
      "Ngữ pháp thường gặp trong thi cử và giao tiếp hàng ngày",
      "Bài tập luyện tập kèm theo ví dụ minh họa chi tiết",
    ],
  },
  {
    id: 3,
    image: require("../assets/english3.jpg"),
    title: "Bài 3: Học tiếng Anh giao tiếp từ cơ bản đến nâng cao",
    description:
      "Đây là bộ tài liệu tổng hợp ngữ pháp Tiếng Anh đầy đủ và chi tiết, giúp bạn xây dựng nền tảng vững chắc từ cơ bản đến nâng cao. Với phương pháp trình bày rõ ràng, dễ hiểu kèm theo ví dụ minh họa sinh động, tài liệu phù hợp cho cả người mới bắt đầu và những bạn muốn nâng cao kỹ năng. Ngoài ra, các bài tập thực hành giúp củng cố kiến thức và phát triển khả năng ứng dụng ngữ pháp trong thực tế.",
    videoUrl: "https://www.youtube.com/watch?v=HtgB1z4n_rE",
    content: [
      "Giao tiếp cơ bản: Các câu chào hỏi, giới thiệu bản thân, hỏi thăm sức khỏe",
      "Giao tiếp trong cuộc sống hàng ngày: Mua sắm, hỏi đường, đặt món ăn, gọi điện thoại",
      "Giao tiếp nơi công sở: Gặp gỡ đồng nghiệp, trao đổi công việc, viết email đơn giản",
      "Giao tiếp nâng cao: Trình bày ý kiến, thảo luận, thương lượng, thuyết trình",
      "Phát triển kỹ năng nghe hiểu: Nghe hội thoại, nghe tin tức, xem phim tiếng Anh",
      "Phát triển kỹ năng nói: Thực hành phát âm, luyện nói theo chủ đề, đối thoại thực tế",
      "Ngữ pháp giao tiếp cần thiết: Câu hỏi, câu mệnh lệnh, cách dùng thì phổ biến trong giao tiếp",
      "Mở rộng từ vựng giao tiếp theo chủ đề: Gia đình, du lịch, sức khỏe, công việc",
      "Kỹ năng phản xạ nhanh trong hội thoại",
      "Bài tập và tình huống thực tế giúp củng cố kỹ năng giao tiếp",
    ],
  },
  {
    id: 4,
    image: require("../assets/english4.jpg"),
    title:
      "Bài 4: Kho Từ Vựng Viết Tắt Tiếng Anh Siêu Thông Dụng – Tổng Hợp Dễ Nhớ",
    description:
      "Bộ sưu tập các từ viết tắt tiếng Anh phổ biến nhất được sử dụng hàng ngày trong giao tiếp, công việc và mạng xã hội. Tài liệu giúp bạn nhanh chóng làm quen và hiểu rõ ý nghĩa, cách sử dụng của từng từ viết tắt, từ những từ cơ bản như ASAP, DIY đến các thuật ngữ công nghệ, mạng xã hội và văn phòng. Đây là công cụ hữu ích giúp bạn giao tiếp tự tin và nắm bắt nhanh xu hướng ngôn ngữ hiện đại.",
    videoUrl: "https://www.youtube.com/watch?v=HcTVkjvbsLs",
    content: [
      "Viết tắt lầ gì",
      "Có những kiểu viết nào trong tiếng anh",
      "ASAP – As Soon As Possible: càng sớm càng tốt",
      "DIY – Do It Yourself: tự làm lấy",
      "FYI – For Your Information: để bạn biết",
      "LOL – Laugh Out Loud: cười lớn",
      "BRB – Be Right Back: quay lại ngay",
      "BTW – By The Way: nhân tiện nói luôn",
      "IDK – I Don’t Know: tôi không biết",
      "OMG – Oh My God: ôi Chúa ơi",
      "FAQ – Frequently Asked Questions: các câu hỏi thường gặp",
      "ETA – Estimated Time of Arrival: thời gian dự kiến đến",
      "RSVP – Répondez S’il Vous Plaît (Please Respond): vui lòng phản hồi",
      "TGIF – Thank God It’s Friday: may quá cuối tuần rồi",
      "VIP – Very Important Person: người rất quan trọng",
      "CEO – Chief Executive Officer: giám đốc điều hành",
      "BTW – By The Way: nhân tiện",
      "IMHO – In My Humble Opinion: theo ý kiến khiêm tốn của tôi",
    ],
  },
  {
    id: 5,
    image: require("../assets/english5.jpg"),
    title: "Bài 5: Bí Kíp Làm Chủ Ngữ Pháp Tiếng Anh Cơ Bản Trong 20 Giờ",
    description:
      "Khám phá phương pháp học ngữ pháp tiếng Anh hiệu quả, giúp bạn nắm vững những cấu trúc cốt lõi chỉ trong 20 giờ. Bài viết chia nhỏ lộ trình học thành các bước đơn giản, dễ nhớ, phù hợp cho người mới bắt đầu hoặc cần ôn tập lại kiến thức nền tảng.",
    videoUrl: "https://www.youtube.com/watch?v=Xa7DqJ8uNuw",
    content: [
      "Ngữ pháp là gì",
      "Quy tắc cấu tạo câu",
      "Từ loại cơ bản",
      "Cấu trúc câu chuẩn",
      "Thì (Tenses)",
      "Mạo từ, giới từ, liên từ",
      "Vai trò trong giao tiếp và viết",
    ],
  },
];

export const intermediate: IData[] = [
  {
    id: 6,
    image: require("../assets/english6.png"),
    title:
      "Bài 6: Learn English in 3 Hours – Master All the Essential Basics Fast!",
    description:
      "Bạn muốn bắt đầu nói và hiểu tiếng Anh ngay hôm nay? Khóa học cấp tốc trong 3 giờ này sẽ giúp bạn nắm vững tất cả những kiến thức cơ bản cần thiết: ngữ pháp thiết yếu, từ vựng hàng ngày, mẹo phát âm và các cụm từ quan trọng trong tình huống thực tế. Hoàn hảo cho người mới bắt đầu hoặc bất kỳ ai muốn có một nền tảng tiếng Anh nhanh chóng, rõ ràng và đầy đủ. Học thông minh – tiến bộ nhanh!",
    videoUrl: "https://www.youtube.com/watch?v=iYCYEz3YqPM",
    content: [
      "Learn English in 3 Hours",
      "Giờ 1: Học các từ loại cơ bản và cấu trúc câu đơn giản.",
      "Giờ 2: Nắm vững các thì quan trọng và mẫu câu giao tiếp thiết yếu.",
      "Giờ 3: Luyện phát âm chuẩn và thực hành phản xạ nói.",
    ],
  },
  {
    id: 7,
    image: require("../assets/english7.jpg"),
    title: "Bài 7: 4 Giờ Làm Chủ Tiếng Anh Giao Tiếp Cơ Bản",
    description:
      "Muốn học tiếng Anh nhanh và hiệu quả? Khóa học 4 giờ này sẽ giúp bạn nắm vững tất cả những kiến thức cơ bản quan trọng nhất: ngữ pháp thiết yếu, từ vựng thông dụng, cách phát âm chuẩn và các mẫu câu giao tiếp phổ biến. Dù bạn mới bắt đầu hay muốn ôn lại nền tảng, đây là lộ trình hoàn hảo để tự tin sử dụng tiếng Anh trong cuộc sống hàng ngày. Học tập thông minh, tiến bộ nhanh!",
    videoUrl: "https://www.youtube.com/watch?v=rpEph-sDNOI",
    content: [
      "Hour 1: Basic grammar and vocabulary essentials.",
      "Hour 2: Core tenses and common conversational phrases.",
      "Hour 3: Pronunciation tips and speaking practice.",
      "Hour 4: Listening skills and real-life application.",
    ],
  },
  {
    id: 8,
    image: require("../assets/english8.jpg"),
    title: "Bài 8: Get Started with English Like a Pro!",
    description:
      "Trong bài học này, ta sẽ cùng nhau tìm hiểu cách học tiếng anh như một người 'PRO'",
    videoUrl: "https://www.youtube.com/watch?v=opDoMdKL7CI",
    content: [
      "Các câu chào hỏi cơ bản",
      " Ngữ pháp nền tảng",
      "Từ vựng thông dụng nhất",
      "Cách phát âm chuẩn",
    ],
  },
  {
    id: 9,
    image: require("../assets/english9.png"),
    title: "Bài 9: Learn all the Tenses in English: Complete Course",
    description:
      "Trong bài học này, ta sẽ cùng nhau tìm hiểu các thì trong tiếng anh",
    videoUrl: "https://www.youtube.com/watch?v=O9S70oJAivI",
    content: [
      "Các câu chào hỏi cơ bản",
      " Ngữ pháp nền tảng",
      "Từ vựng thông dụng nhất",
      "Cách phát âm chuẩn",
    ],
  },
  {
    id: 10,
    image: require("../assets/english10.jpg"),
    title: "Bài 10: Learn 8 Popular English Expressions",
    description:
      "Trong bài học này, ta sẽ cùng nhau tìm hiểu về nói tiếng Anh tự nhiên và giống người bản xứ hơn",
    videoUrl: "https://www.youtube.com/watch?v=XkV1wkvl3Ws",
    content: [
      "Các câu chào hỏi cơ bản",
      " Ngữ pháp nền tảng",
      "Từ vựng thông dụng nhất",
      "Cách phát âm chuẩn",
    ],
  },
];

export const advanced: IData[] = [
  {
    id: 20,
    image: require("../assets/englishad1.png"),
    title: "8 Easy English Expressions with 'on the...'",
    description:
      "Khóa học sẽ giúp bạn tăng cường phản xạ khi nghe,nói tiếng Anh hằng ngày.",
    videoUrl: "https://www.youtube.com/watch?v=k-KUwWNLxEU",
    content: [
      "Bước 1: Xem toàn bộ video một lần để hiểu tổng quan 8 biểu thức với “on the…”",
      "Bước 2: Ghi lại từng biểu thức",
      "Bước 3: Lặp lại theo video để luyện phát âm và ngữ điệu đúng",
      "Bước 4: Viết câu ví dụ riêng của bạn cho mỗi biểu thức",
      "Bước 5: Ôn lại bằng flashcards hoặc viết lại vào sổ tay học tập cá nhân",
      "Bước 6: Áp dụng vào nói hằng ngày",
      "Bước 7: Xem lại video sau vài ngày để củng cố và kiểm tra khả năng ghi nhớ",
    ],
  },
  {
    id: 21,
    image: require("../assets/englishad2.jpg"),
    title: "Learn English: SAY or TELL?",
    description:
      "Bạn có bao giờ băn khoăn khi dùng say và tell trong tiếng Anh? Video này sẽ giúp bạn phân biệt và sử dụng chính xác hai từ này!",
    videoUrl: "https://www.youtube.com/watch?v=vh3Pu61uCuM",
    content: [
      "Bước 1: Xem video để hiểu sự khác nhau cơ bản giữa SAY và TELL",
      "Bước 2: Ghi chú các ví dụ minh họa cách dùng SAY và TELL trong từng ngữ cảnh",
      "Bước 3: Lặp lại các câu mẫu để luyện phát âm và ngữ điệu chuẩn",
      "Bước 4: Tự tạo câu mới sử dụng SAY và TELL dựa trên ví dụ đã học",
      "Bước 5: Thực hành nói hoặc viết các câu đó trong giao tiếp hàng ngày",
      "Bước 6: Ôn lại kiến thức sau vài ngày để nhớ lâu và sử dụng đúng",
    ],
  },
  {
    id: 22,
    image: require("../assets/englishad3.jpg"),
    title:
      "600 English Words for Everyday Life | English Vocabulary Masterclass",
    description:
      "Bạn muốn mở rộng vốn từ tiếng Anh để giao tiếp tự nhiên và linh hoạt? Video này tổng hợp 600 từ vựng thông dụng nhất trong cuộc sống hàng ngày dành cho bạn!",
    videoUrl: "https://www.youtube.com/watch?v=5qiYEKVZAIM",
    content: [
      "Bước 1: Xem toàn bộ video để làm quen với 600 từ vựng thông dụng",
      "Bước 2: Ghi chú lại các từ mới và nghĩa của chúng theo chủ đề",
      "Bước 3: Lặp lại phát âm của từng từ để luyện cách nói chuẩn",
      "Bước 4: Tạo câu ví dụ riêng cho mỗi từ để nhớ lâu hơn",
      "Bước 5: Ôn tập thường xuyên bằng flashcards hoặc ứng dụng học từ vựng",
      "Bước 6: Áp dụng các từ đã học vào giao tiếp hoặc viết hàng ngày",
      "Bước 7: Xem lại video hoặc tài liệu kèm theo để củng cố kiến thức",
    ],
  },
  {
    id: 23,
    image: require("../assets/englishad4.png"),
    title: "Pronunciation Training: 3 Ways to speak English MUCH more clearly!",
    description:
      "Bạn muốn nói tiếng Anh rõ ràng, dễ hiểu hơn? Video này sẽ chỉ bạn 3 cách luyện phát âm giúp bạn cải thiện ngay!",
    videoUrl: "https://www.youtube.com/watch?v=jrwglP9EQOU",
    content: [
      "Bước 1: Xem video để làm quen với 3 kỹ thuật phát âm quan trọng",
      "Bước 2: Nghe và lặp lại các từ, câu mẫu trong video",
      "Bước 3: Tập trung luyện âm đuôi, nhấn trọng âm và ngữ điệu theo hướng dẫn",
      "Bước 4: Ghi âm lại giọng nói của mình để so sánh và chỉnh sửa",
      "Bước 5: Luyện tập nói các câu dài, đoạn văn sử dụng kỹ thuật đã học",
      "Bước 6: Thực hành giao tiếp thực tế để nâng cao sự tự tin và trôi chảy",
      "Bước 7: Ôn luyện đều đặn và xem lại video để củng cố kỹ năng phát âm",
    ],
  },
];

export const populars: { image: ImageSourcePropType; lesson: IData }[] = [
  {
    image: require("../assets/popular-image1.png"),
    lesson: basic[0],
  },
  {
    image: require("../assets/popular-image2.png"),
    lesson: basic[1],
  },
  {
    image: require("../assets/popular-image3.png"),
    lesson: intermediate[0],
  },
  {
    image: require("../assets/popular-image4.png"),
    lesson: intermediate[1],
  },
  {
    image: require("../assets/popular-image5.png"),
    lesson: advanced[1],
  },
];

export const headerSlideData: MemberImageProps[] = [
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: basic[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: intermediate[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: advanced[0],
  },
];
