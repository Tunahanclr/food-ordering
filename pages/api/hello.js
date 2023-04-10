export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "John Doe" },
    { id: 3, name: "John Doe" },
  ]);
}