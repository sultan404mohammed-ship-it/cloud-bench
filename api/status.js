export default function handler(req, res) {
  res.status(200).json({
    service: "cloud-comparison-demo",
    mode: "serverless",
    status: "ok",
    timestamp: new Date().toISOString()
  });
}
