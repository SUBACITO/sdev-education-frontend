export type Exercise = {
  title: string
  description: string
  concept: string
  example: string
  starter: string
  hint: string
  testExpression: string
  expected: string
}

const greeting: Exercise = {
  title: "Viết hàm greet",
  description:
    "Viết hàm greet(name) trả về chuỗi Hello, <name>!. Ví dụ greet('An') trả về 'Hello, An!'.",
  concept:
    "Hàm nhận dữ liệu đầu vào, xử lý và trả về kết quả bằng return. Bạn có thể nối các chuỗi bằng toán tử +.",
  example:
    "const course = 'JavaScript';\nlet students = 10;\nstudents = students + 1;\n\nfunction add(a, b) {\n  return a + b;\n}",
  starter:
    "function greet(name) {\n  // Trả về lời chào cho name\n  return '';\n}\n\nconsole.log(greet('An'));",
  hint: "Ghép 'Hello, ' + name + '!' rồi trả về từ hàm.",
  testExpression: "greet('An')",
  expected: JSON.stringify("Hello, An!"),
}

const response: Exercise = {
  title: "Tạo phản hồi API",
  description:
    "Viết hàm makeResponse(name) trả về object { success: true, name }. Thử với tên 'An'.",
  concept:
    "Một API thường trả về object có cấu trúc ổn định để giao diện dễ xử lý kết quả.",
  example:
    "const user = { name: 'An', active: true };\nconsole.log(user.name);",
  starter:
    "function makeResponse(name) {\n  // Trả về object theo yêu cầu\n  return {};\n}\n\nconsole.log(makeResponse('An'));",
  hint: "Dùng return { success: true, name: name }.",
  testExpression: "makeResponse('An')",
  expected: JSON.stringify({ success: true, name: "An" }),
}

const nextRoute: Exercise = {
  title: "Tạo đường dẫn khóa học",
  description:
    "Viết hàm coursePath(slug) trả về đường dẫn /courses/<slug>. Ví dụ frontend cho kết quả /courses/frontend.",
  concept:
    "Trong Next.js, một slug có thể được ghép vào route động để mở đúng trang.",
  example:
    "const slug = 'frontend';\nconst path = '/courses/' + slug;\nconsole.log(path);",
  starter:
    "function coursePath(slug) {\n  // Ghép slug vào đường dẫn khóa học\n  return '';\n}\n\nconsole.log(coursePath('frontend'));",
  hint: "Trả về '/courses/' + slug.",
  testExpression: "coursePath('frontend')",
  expected: JSON.stringify("/courses/frontend"),
}

const database: Exercise = {
  title: "Lọc bản ghi đang hoạt động",
  description:
    "Viết hàm activeUsers(users) chỉ giữ các phần tử có active là true. Đây là bài bổ trợ về xử lý dữ liệu bằng JavaScript.",
  concept:
    "Một truy vấn dữ liệu thường cần điều kiện lọc. Trong JavaScript, filter giúp minh họa thao tác này ngay trên trình duyệt.",
  example:
    "const users = [\n  { name: 'An', active: true },\n  { name: 'Bình', active: false }\n];\nconsole.log(users.filter(user => user.active));",
  starter:
    "function activeUsers(users) {\n  // Chỉ giữ người dùng active\n  return users;\n}\n\nconsole.log(activeUsers([{ name: 'An', active: true }]));",
  hint: "Dùng users.filter(user => user.active === true).",
  testExpression:
    "activeUsers([{name:'An',active:true},{name:'Bình',active:false}])",
  expected: JSON.stringify([{ name: "An", active: true }]),
}

const docker: Exercise = {
  title: "Tạo nhãn image",
  description:
    "Viết hàm imageTag(name, version) tạo nhãn dạng name:version. Ví dụ app và 1.0 cho kết quả app:1.0.",
  concept:
    "Nhãn image giúp phân biệt các phiên bản khi đóng gói và triển khai ứng dụng.",
  example:
    "const name = 'app';\nconst version = '1.0';\nconsole.log(name + ':' + version);",
  starter:
    "function imageTag(name, version) {\n  // Ghép tên và phiên bản\n  return '';\n}\n\nconsole.log(imageTag('app', '1.0'));",
  hint: "Trả về name + ':' + version.",
  testExpression: "imageTag('app', '1.0')",
  expected: JSON.stringify("app:1.0"),
}

const redis: Exercise = {
  title: "Đặt tên cache key",
  description:
    "Viết hàm cacheKey(userId) trả về khóa dạng user:<id>. Ví dụ id 42 cho kết quả user:42.",
  concept:
    "Cache key có quy tắc đặt tên nhất quán sẽ dễ tìm, đọc và quản lý hơn.",
  example:
    "const prefix = 'user';\nconst id = 42;\nconsole.log(prefix + ':' + id);",
  starter:
    "function cacheKey(userId) {\n  // Trả về cache key cho người dùng\n  return '';\n}\n\nconsole.log(cacheKey(42));",
  hint: "Trả về 'user:' + userId.",
  testExpression: "cacheKey(42)",
  expected: JSON.stringify("user:42"),
}

const bullmq: Exercise = {
  title: "Đặt tên tác vụ",
  description:
    "Viết hàm jobLabel(name) trả về chuỗi job:<name>. Ví dụ email cho kết quả job:email.",
  concept:
    "Tên tác vụ rõ ràng giúp theo dõi công việc trong hàng đợi và đọc log nhanh hơn.",
  example: "const queue = 'email';\nconsole.log('job:' + queue);",
  starter:
    "function jobLabel(name) {\n  // Trả về tên tác vụ\n  return '';\n}\n\nconsole.log(jobLabel('email'));",
  hint: "Trả về 'job:' + name.",
  testExpression: "jobLabel('email')",
  expected: JSON.stringify("job:email"),
}

export function getExercise(slug: string): Exercise {
  if (["nextjs-co-ban", "nextjs-nang-cao"].includes(slug)) return nextRoute
  if (slug === "fullstack") return response
  if (["backend", "nestjs-co-ban", "nestjs-nang-cao"].includes(slug))
    return response
  if (slug === "postgresql") return database
  if (slug === "docker") return docker
  if (slug === "redis") return redis
  if (slug === "bullmq") return bullmq
  return greeting
}
