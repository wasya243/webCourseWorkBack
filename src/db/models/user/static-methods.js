module.exports = {
  setSessionId,
  unsetSessionId
};

function setSessionId(userId, sessionId) {

  return this.updateOne({_id: userId}, {
    $set: {sessionId}
  });
}

function unsetSessionId(userId) {

  return this.updateOne({_id: userId}, {
    $unset: {sessionId: 1}
  });
}