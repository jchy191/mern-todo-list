import auth from 'basic-auth';
import bcryptjs from 'bcryptjs';
import {User} from './models.js';

const authenticateUser = async (req, res, next) => {
    let message = null;
    const credentials = auth(req);
    if (credentials) {
        const user = await User.findOne({"username": credentials.name}).exec();
        if (user) {
            const authenticated = bcryptjs.compareSync(credentials.pass, user.password);
            if (authenticated) {
                console.log(`Authentication successful for username: ${user.username}`);
            } else {
                message = `Authentication failure for username: ${credentials.name}`;
            }
        } else {
            message = `User not found for username: ${credentials.name}`;
        }
    } else {
        message = `Auth header not found`;
    }

    if (message) {
        console.warn(message);
        res.status(401).json({message: 'Access Denied'});
    } else {
        next();
    }
}

export default authenticateUser;