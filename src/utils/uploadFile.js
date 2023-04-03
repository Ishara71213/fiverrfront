import axios from "axios";

const uploadFile = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dj7nftia2/image/upload",
      data
    );
    const { url } = res.data;
    // console.log(url);
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default uploadFile;
