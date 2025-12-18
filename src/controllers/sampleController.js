// Sample controller function
exports.getWelcomeMessage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the PharmacyApp Backend!' });
};