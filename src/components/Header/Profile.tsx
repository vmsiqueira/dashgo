import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Vitor Siqueira</Text>
          <Text color='gray.300' fontSize='small'>
            vitormsiqueira@hotmail.com
          </Text>
        </Box>
      ) }

      <Avatar size='md' name='Vitor Siqueira' src='https://github.com/vmsiqueira.png' />
    </Flex>
);
}