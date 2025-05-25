import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE,
  COMMON,
  PLANET,
  ALL,
}

export interface IContent {
  title?: string;
  body?: string[];
  image?: string;
}

export interface IData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  content: IContent[];
}

export interface IObjectData {
  [key: string]: IData;
}

export const headerSlideData: IObjectData = {
  slide1: {
    id: "slide1",
    image: require("../assets/astronomy/slide1.jpeg"),
    title: "Vũ trụ là gì?",
    description:
      "Vũ Trụ được xem là không gian vô tận - Nơi chứa đựng các thiên hà cùng những kì quan tuyệt vời ở trong lòng mình. Trong đó, mỗi thiên hà là tập hợp của nhiều thiên thể như hành tinh, vệ tinh (mặt trăng), ngôi sao, sao băng, sao chổi,…",
    content: [
      {
        title: "Lịch Sử và Khởi Nguồn:",
        body: [
          "Big Bang: Khoảng 13.8 tỷ năm trước, một vụ nổ lớn gọi là Big Bang đã khởi đầu sự tồn tại của vũ trụ. Vụ nổ này tạo ra tất cả vật chất và năng lượng, cũng như không gian và thời gian mà chúng ta biết ngày nay.",
        ],
        image:
          "https://cdnphoto.dantri.com.vn/b0WWpuZsz9YTS_gI-Gp7Xet6sBs=/thumb_w/1020/2022/11/30/vutru-crop-1669768098200.jpeg",
      },
      {
        title: "Cấu Trúc và Thành Phần:",
        body: [
          "Thiên Hà: Thiên hà là hệ thống lớn bao gồm hàng tỷ ngôi sao, khí, bụi và vật chất tối, tất cả được giữ lại bởi lực hấp dẫn. Ví dụ, Ngân Hà (Milky Way) là thiên hà chứa Hệ Mặt Trời của chúng ta.",
          "Ngôi Sao và Hành Tinh: Ngôi sao là những khối cầu khí nóng, tự phát sáng, trong khi hành tinh là những thiên thể quay quanh ngôi sao và không tự phát sáng.",
          "Vật Chất Tối và Năng Lượng Tối: Mặc dù không thể nhìn thấy bằng mắt thường, vật chất tối và năng lượng tối chiếm phần lớn khối lượng và năng lượng của vũ trụ, ảnh hưởng mạnh mẽ đến sự mở rộng và cấu trúc của nó.",
        ],
        image:
          "https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2023/07/22/faef_cau-tao-vu-tru.png",
      },
    ],
  },
  slide2: {
    id: "slide2",
    image:
      "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2023/10/26/anh-man-hinh-2023-10-26-luc-102652-16982908545011593910344-68-132-1141-1848-crop-1698290911229255785062.png",
    title: "Nguyệt Thực - Hiện Tượng Thiên Văn Kỳ Thú",
    description:
      "Nguyệt thực là hiện tượng xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng, khiến bóng của Trái Đất che khuất Mặt Trăng. Đây là một trong những hiện tượng thiên văn ấn tượng và dễ dàng quan sát bằng mắt thường.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Nguyệt Thực",
        body: [
          "Nguyệt thực xảy ra khi Mặt Trăng đi vào vùng bóng của Trái Đất. Vùng bóng này bao gồm hai phần: bóng tối (umbra) và bóng nửa tối (penumbra).",
          "Nguyệt thực toàn phần xảy ra khi Mặt Trăng hoàn toàn nằm trong bóng tối của Trái Đất, khiến nó chuyển sang màu đỏ do hiện tượng tán xạ ánh sáng trong khí quyển Trái Đất.",
          "Nguyệt thực một phần xảy ra khi chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
        ],
      },
      {
        title: "Các Loại Nguyệt Thực",
        body: [
          "Nguyệt thực toàn phần: Mặt Trăng hoàn toàn bị che khuất và chuyển sang màu đỏ đậm.",
          "Nguyệt thực một phần: Chỉ một phần của Mặt Trăng bị che khuất bởi bóng tối của Trái Đất.",
          "Nguyệt thực nửa tối: Mặt Trăng chỉ đi vào bóng nửa tối của Trái Đất, khiến nó mờ đi mà không chuyển sang màu đỏ.",
        ],
      },
      {
        title: "Quan Sát Nguyệt Thực",
        body: [
          "Nguyệt thực dễ dàng quan sát bằng mắt thường mà không cần thiết bị bảo vệ đặc biệt như khi quan sát nhật thực.",
          "Sự kiện nguyệt thực thường kéo dài trong vài giờ, từ khi Mặt Trăng bắt đầu đi vào bóng nửa tối cho đến khi nó ra khỏi bóng hoàn toàn.",
          "Nguyệt thực có thể được quan sát từ bất kỳ nơi nào trên Trái Đất khi Mặt Trăng nằm trên đường chân trời.",
        ],
      },
      {
        title: "Lịch Sử Và Văn Hóa",
        body: [
          "Nguyệt thực đã được quan sát và ghi lại từ thời cổ đại, với nhiều nền văn hóa coi đây là sự kiện có ý nghĩa đặc biệt.",
          "Trong nhiều nền văn hóa, nguyệt thực được liên kết với các huyền thoại và truyền thuyết, thường được coi là điềm báo hoặc sự can thiệp của các vị thần.",
          "Ngày nay, nguyệt thực vẫn là một hiện tượng thiên văn được yêu thích và thu hút sự quan tâm của nhiều người trên khắp thế giới.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Các nhà thiên văn học sử dụng nguyệt thực để nghiên cứu cấu trúc và thành phần của bầu khí quyển Trái Đất thông qua hiện tượng tán xạ ánh sáng.",
          "Quan sát nguyệt thực cũng giúp các nhà khoa học hiểu rõ hơn về quỹ đạo và chuyển động của Mặt Trăng và Trái Đất.",
          "Nghiên cứu về nguyệt thực đóng góp vào việc cải thiện dự báo và hiểu biết về các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
  slide3: {
    id: "slide3",
    image: "https://bcp.cdnchinhphu.vn/Uploaded/buianhtho/2017_11_27/7Anh.jpg",
    title: "Hiện Tượng Sao Băng - Vũ Điệu Ánh Sáng Trên Bầu Trời",
    description:
      "Hiện tượng sao băng là hiện tượng thiên văn xảy ra khi các mảnh vụn vũ trụ, thường là các hạt bụi hoặc đá nhỏ, đi vào bầu khí quyển Trái Đất và bốc cháy, tạo ra những vệt sáng trên bầu trời. Đây là một trong những hiện tượng thiên văn đẹp và hấp dẫn nhất.",
    content: [
      {
        title: "Cấu Tạo Và Đặc Điểm Của Sao Băng",
        body: [
          "Sao băng (hay còn gọi là meteoroid) là các mảnh vụn nhỏ từ các sao chổi hoặc tiểu hành tinh.",
          "Khi một sao băng đi vào bầu khí quyển Trái Đất với tốc độ cao, ma sát với không khí làm nó nóng lên và bốc cháy, tạo ra vệt sáng gọi là sao băng.",
          "Nếu sao băng không cháy hết và rơi xuống mặt đất, phần còn lại được gọi là thiên thạch (meteorite).",
        ],
      },
      {
        title: "Các Loại Sao Băng",
        body: [
          "Sao băng lẻ: Sao băng xuất hiện ngẫu nhiên trên bầu trời mà không thuộc về bất kỳ trận mưa sao băng nào.",
          "Mưa sao băng: Hiện tượng xuất hiện hàng loạt sao băng từ một điểm chung trên bầu trời, thường xảy ra khi Trái Đất đi qua đám mây bụi của một sao chổi.",
        ],
      },
      {
        title: "Các Trận Mưa Sao Băng Nổi Tiếng",
        body: [
          "Perseids: Xảy ra vào tháng 8 hàng năm, với điểm xuất phát từ chòm sao Perseus.",
          "Geminids: Diễn ra vào tháng 12, với điểm xuất phát từ chòm sao Gemini.",
          "Leonids: Xuất hiện vào tháng 11, với điểm xuất phát từ chòm sao Leo và có thể tạo ra các trận mưa sao băng rất mạnh.",
        ],
      },
      {
        title: "Quan Sát Sao Băng",
        body: [
          "Thời điểm tốt nhất để quan sát sao băng là vào đêm khuya hoặc rạng sáng, khi bầu trời tối nhất.",
          "Không cần thiết bị đặc biệt để quan sát sao băng, nhưng một chiếc ghế ngả lưng và một tấm chăn có thể giúp bạn thoải mái hơn khi quan sát.",
          "Tránh ánh sáng đô thị và tìm đến các khu vực tối, thoáng đãng để có tầm nhìn tốt nhất.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Nghiên cứu về sao băng giúp các nhà khoa học hiểu rõ hơn về thành phần và nguồn gốc của các mảnh vụn vũ trụ.",
          "Các trận mưa sao băng cung cấp cơ hội để thu thập và phân tích thiên thạch, giúp mở rộng hiểu biết về hệ Mặt Trời và các sao chổi.",
          "Quan sát sao băng cũng đóng góp vào việc theo dõi và dự đoán các hiện tượng thiên văn khác.",
        ],
      },
    ],
  },
};

export const mixedData = {
  ...headerSlideData,
};

export const allData = {
  [EData.HEADER_SLIDE]: headerSlideData,
  [EData.ALL]: mixedData,
};
