const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const messageText = `
  Name: ${body.name}\r\n\
  Email: ${body.email}\r\n\
  Telephone: ${body.phone || 'No telephone provided'}\r\n\
  Message: ${body.message}
  `;

  const email = {
    to: 'hello@lukemeadows.dev',
    from: 'hello@lukemeadows.dev',
    subject: 'New Website Enquiry',
    text: messageText,
  };

  await sgMail.send(email).then(
    (success) => {
      res.status(200).json('success');
    },
    (error) => {
      res.status(500).json('error');
      console.log(error);
    }
  );
}
