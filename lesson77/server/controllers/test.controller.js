export async function adminGet(res, req) {
  try {
    res.status(200).json({ message: "it's gonna be alright or left" });
  } catch (err) {
    res.status(501).json({ status: 501, message: new Error(err) });
  }
}

export async function userGet(res, req) {
  try {
    res.status(200).json({ message: "it's gonna be alright or left" });
  } catch (err) {
    res.status(501).json({ status: 501, message: new Error(err) });
  }
}

export async function developerGet(res, req) {
  try {
    res.status(200).json({ message: "it's gonna be alright or left" });
  } catch (err) {
    res.status(501).json({ status: 501, message: new Error(err) });
  }
}

export async function moderatorGet(res, req) {
  try {
    res.status(200).json({ message: "it's gonna be alright or left" });
  } catch (err) {
    res.status(501).json({ status: 501, message: new Error(err) });
  }
}

export async function auditGet(res, req) {
  try {
    res.status(200).json({ message: "it's gonna be alright or left" });
  } catch (err) {
    res.status(501).json({ status: 501, message: new Error(err) });
  }
}
