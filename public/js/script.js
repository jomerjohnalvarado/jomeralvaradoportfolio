// Contact Form with Full Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alertMessage');
    const successModal = document.getElementById('successModal');

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => {
      msg.classList.add('hidden');
      msg.textContent = '';
    });
    document.querySelectorAll('input, textarea').forEach(field => {
      field.classList.remove('border-red-500');
    });
    alert.classList.add('hidden');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    let hasErrors = false;

    // Validate Name
    if (!name) {
      showFieldError('name', 'Full name is required');
      hasErrors = true;
    } else if (name.length < 2) {
      showFieldError('name', 'Name must be at least 2 characters');
      hasErrors = true;
    }

    // Validate Email
    if (!email) {
      showFieldError('email', 'Email address is required');
      hasErrors = true;
    } else if (!isValidEmail(email)) {
      showFieldError('email', 'Please enter a valid email address');
      hasErrors = true;
    }

    // Validate Phone (optional but if provided must be valid)
    if (phone && !isValidPhone(phone)) {
      showFieldError('phone', 'Please enter a valid phone number');
      hasErrors = true;
    }

    // Validate Subject
    if (!subject) {
      showFieldError('subject', 'Subject is required');
      hasErrors = true;
    } else if (subject.length < 3) {
      showFieldError('subject', 'Subject must be at least 3 characters');
      hasErrors = true;
    }

    // Validate Message
    if (!message) {
      showFieldError('message', 'Message is required');
      hasErrors = true;
    } else if (message.length < 10) {
      showFieldError('message', 'Message must be at least 10 characters');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    // Disable submit button
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';

    try {
      const formData = {
        name: name,
        email: email,
        phone: phone || '',
        subject: subject,
        message: message,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Show success modal
        contactForm.reset();
        successModal.classList.remove('hidden');

        // Redirect after 3 seconds
        setTimeout(() => {
          location.href = '/';
        }, 3000);
      } else {
        showError('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      showError('An error occurred. Please try again later.');
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = 'Send Message';
    }
  });

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMsg = field.parentElement.querySelector('.error-message');
    
    errorMsg.textContent = '❌ ' + message;
    errorMsg.classList.remove('hidden');
    field.classList.add('border-red-500', 'border-2');
    
    // Remove error on input
    field.addEventListener('input', () => {
      errorMsg.classList.add('hidden');
      field.classList.remove('border-red-500');
      field.classList.remove('border-2');
    }, { once: true });
  }

  function showError(message) {
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alertMessage');
    
    alert.classList.remove('hidden', 'bg-green-100', 'dark:bg-green-950/30', 'border-green-300', 'dark:border-green-800/50');
    alert.classList.add('bg-red-100', 'dark:bg-red-950/30', 'border-red-300', 'dark:border-red-800/50', 'text-red-800', 'dark:text-red-300');
    
    alertMessage.innerHTML = '<i class="fas fa-exclamation-circle text-lg"></i> <span>' + message + '</span>';
    alert.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      alert.classList.add('hidden');
    }, 5000);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(phone) {
    const phoneRegex = /^[0-9\s\-\+\(\)]{7,}$/;
    return phoneRegex.test(phone);
  }
}