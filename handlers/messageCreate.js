const logger = require('../utils/logger');

module.exports = {
    name: 'messageCreate',
    async execute(message, commands, ANTHROPIC) {
        // Bot メッセージは無視
        if (message.author.bot) return;
        // システムメッセージは無視
        if (message.system) return;

        // 返信かどうかをチェック
        if (message.reference?.messageId) {
            try {
                const repliedMessage = await message.channel.messages.fetch(message.reference.messageId);

                // Bot メッセージへの返信かチェック
                if (repliedMessage.author.id === message.client.user.id) {
                    const command = commands['chat'];
                    if (command && command.handleReply) {
                        await command.handleReply(message, ANTHROPIC);
                    }
                    return;
                }
            } catch (error) {
                await logger.errorToFile('返信メッセージの処理中にエラーが発生', error);
            }
        }

        // スレッド内のメッセージは会話の継続とみなす
        if (message.channel.isThread()) {
            try {
                const channelId = process.env.CHAT_CHANNEL_ID.split(',');
                // インタラクションが特定のチャンネルでなければ何もしない
                if (!channelId.includes(message.channel.parentId)) {
                    return;
                }

                const command = commands['chat'];
                if (command?.handleReply) {
                    await command.handleReply(message, ANTHROPIC);
                }
            } catch (error) {
                await logger.errorToFile('スレッド内メッセージの処理中にエラーが発生', error);
            }
        }
    }
};