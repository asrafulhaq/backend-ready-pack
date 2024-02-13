import cloudinay from "cloudinary";

// configuration
cloudinay.v2.config({
  cloud_name: "dis89p0kx",
  api_key: "179378785211637",
  api_secret: "fjH24wym4yj0jxJRXm-2Bh7EbLw",
});

// file upload to cloude
export const fileUploadToCloud = async (path) => {
  const data = await cloudinay.v2.uploader.upload(path);
  return data;
};

// file delete form cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinay.v2.uploader.destroy(publicId);
};
