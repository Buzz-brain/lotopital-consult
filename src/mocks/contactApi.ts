// Mock API for contact form submission
export function sendContactForm(data: { name: string; email: string; message: string }) {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1200); // Simulate network delay
  });
}
