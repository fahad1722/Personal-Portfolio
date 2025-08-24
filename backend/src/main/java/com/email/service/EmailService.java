package com.email.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.email.dto.EmailRequest;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;
    
    @Value("${spring.receiver.mail}")
    private String receiverMail;

    public void sendEmail(EmailRequest request) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(receiverMail);
        helper.setSubject("New Contact Form Message from " + request.getName());
        String htmlContent = "<!DOCTYPE html>"
                + "<html lang='en'>"
                + "<head>"
                + "<meta charset='UTF-8'>"
                + "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
                + "<style>"
                + "body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }"
                + ".container { max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }"
                + ".header { background-color: #007BFF; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; }"
                + ".content { padding: 20px; }"
                + ".details { margin-bottom: 15px; }"
                + ".details p { margin: 5px 0; }"
                + ".footer { text-align: center; font-size: 12px; color: #777; padding-top: 10px; border-top: 1px solid #eee; }"
                + "</style>"
                + "</head>"
                + "<body>"
                + "<div class='container'>"
                + "<div class='header'>"
                + "<h2>New Contact Form Submission</h2>"
                + "</div>"
                + "<div class='content'>"
                + "<div class='details'>"
                + "<p><strong>Name:</strong> " + request.getName() + "</p>"
                + "<p><strong>Email:</strong> " + request.getEmail() + "</p>"
                + "<p><strong>Message:</strong><br>" + request.getMessage().replace("\n", "<br>") + "</p>"
                + "</div>"
                + "</div>"
                + "<div class='footer'>"
                + "<p>This is an automated message from Fahad Mohammed's Portfolio. Please do not reply to this email.</p>"
                + "</div>"
                + "</div>"
                + "</body>"
                + "</html>";

        helper.setText(htmlContent, true);
        mailSender.send(message);
    }
}