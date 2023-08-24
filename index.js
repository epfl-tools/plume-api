import Fastify from 'fastify';

import fetchCampusCount from './hosts/campus.js';
import fetchPiletRenaudCount from './hosts/pilet-renaud.js';
import fetchStudentsPlace4UCount from './hosts/studentsplace4u.js';

const fastify = Fastify({
    logger: true
});

fastify.get('/', async (request, reply) => {

    const [
        campusCount,
        piletRenaudCount,
        studentsPlace4UCount,
    ] = await Promise.all([
        fetchCampusCount(),
        fetchPiletRenaudCount(),
        fetchStudentsPlace4UCount(),
    ]);
    
    reply.send({
        campusCount,
        piletRenaudCount,
        studentsPlace4UCount,
    });

})

fastify.listen({ port: 3000 }, (err, address) => {
    if (err) throw err
});
