/**
 * Email Validate
 */
export const isEmail = (email) => {
  return /^[^\.-/][a-z0-9-_\.]{1,}@[a-z0-9-]{1,}\.[a-z\.]{2,}$/.test(email);
};

/**
 * Email Validate
 */
export const isMobile = (mobile) => {
  return /^(01|8801|\+8801)[0-9]{9}$/.test(mobile);
};

/**
 * Email Validate
 */
export const isString = (data) => {
  return /^[a-z@\.]{1,}$/.test(data);
};

/**
 * Email Validate
 */
export const isNumber = (number) => {
  return /^[0-9\+]{1,}$/.test(number);
};

/**
 * Create a random number
 */
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Random String
 */
export const randStr = (length = 12) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
};

/**
 * Dot to Hy
 */
export const dotsToHyphens = (inputString) => {
  // Use the replace method with a regular expression to replace dots with hyphens
  const stringWithHyphens = inputString.replace(/\./g, "asrafulhaq");
  return stringWithHyphens;
};

/**
 * Hypens to Dots
 */
export const hyphensToDots = (inputString) => {
  // Use the replace method with a regular expression to replace hyphens with dots
  const stringWithDots = inputString.replace(/asrafulhaq/g, ".");
  return stringWithDots;
};

/**
 * Find Public ID
 */
export const findPublicId = (url) => {
  return url.split("/")[url.split("/").length - 1].split(".")[0];
};

/**
 * Create Slug
 */
export const createSlug = (title) => {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedTitle = title.replace(/[^\w\s]/gi, "").toLowerCase();

  // Replace spaces with hyphens
  const slug = cleanedTitle.replace(/\s+/g, "-");

  return slug;
};

/**
 * Generat Random Password
 */
export const generateRandomPassword = (length = 10) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
};

/**
 * Time Ago
 */
export const timeAgo = (date) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const timeElapsed = Date.now() - new Date(date).getTime();

  if (timeElapsed < MINUTE) {
    return `${Math.floor(timeElapsed / SECOND)} seconds ago`;
  } else if (timeElapsed < HOUR) {
    return `${Math.floor(timeElapsed / MINUTE)} minutes ago`;
  } else if (timeElapsed < DAY) {
    return `${Math.floor(timeElapsed / HOUR)} hours ago`;
  } else if (timeElapsed < WEEK) {
    return `${Math.floor(timeElapsed / DAY)} days ago`;
  } else if (timeElapsed < MONTH) {
    return `${Math.floor(timeElapsed / WEEK)} weeks ago`;
  } else if (timeElapsed < YEAR) {
    return `${Math.floor(timeElapsed / MONTH)} months ago`;
  } else {
    return `${Math.floor(timeElapsed / YEAR)} years ago`;
  }
};

/**
 * OPT
 */
export const createOTP = (length = 5) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Append a random digit (0-9)
  }

  return otp;
};
