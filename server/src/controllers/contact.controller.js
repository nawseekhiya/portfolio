import Contact from '../models/Contact.js';
import { validateContact } from '../validators/contact.validator.js';

export const submitContact = async (req, res) => {
  try {
    // Validate request body
    const validation = validateContact(req.body);
    
    if (!validation.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validation.error.flatten().fieldErrors,
      });
    }

    const { name, email, subject, message, honeypot } = validation.data;

    // Check honeypot (bot detection)
    if (honeypot && honeypot.length > 0) {
      // Silently reject but return success to confuse bots
      return res.status(200).json({ 
        success: true,
        message: 'Message sent successfully' 
      });
    }

    // Create contact submission
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip || req.connection?.remoteAddress,
      userAgent: req.get('User-Agent'),
    });

    console.log(`📧 New contact submission from ${email}`);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      id: contact._id,
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    
    const query = status ? { status } : {};
    const skip = (page - 1) * limit;

    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      Contact.countDocuments(query),
    ]);

    res.json({
      contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit),
      },
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};
