'use client';

import { useLocalStorage } from '@mantine/hooks';

export interface UserProfile {
  fullName: string;
  jobTitle: string;
  companyName: string;
  signature?: string;
}

const DEFAULT_PROFILE: UserProfile = {
  fullName: '',
  jobTitle: '',
  companyName: '',
  signature: '',
};

const STORAGE_KEY = 'omg-user-profile';

export function useProfile() {
  const [profile, setProfile] = useLocalStorage<UserProfile>({
    key: STORAGE_KEY,
    defaultValue: DEFAULT_PROFILE,
  });

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...updates }));
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
  };

  const isProfileComplete = Boolean(profile.fullName && profile.jobTitle && profile.companyName);

  return {
    profile,
    setProfile,
    updateProfile,
    resetProfile,
    isProfileComplete,
  };
}
