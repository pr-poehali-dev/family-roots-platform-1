import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import Dashboard from '@/components/Dashboard';
import { FamilyMember } from '@/components/FamilyTree';

export default function Index() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: '1', name: 'Вы', role: 'Основатель', x: 400, y: 300, generation: 0 },
  ]);

  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [stats] = useState({
    totalMembers: 12,
    generations: 4,
    documentsUploaded: 28,
    completionRate: 65,
  });

  const addFamilyMember = (parentId: string, relationship: 'parent' | 'child' | 'spouse') => {
    const parent = familyMembers.find(m => m.id === parentId);
    if (!parent) return;

    let newX = parent.x;
    let newY = parent.y;
    let newGen = parent.generation;
    let newRole = 'Родственник';

    if (relationship === 'parent') {
      newY = parent.y - 120;
      newGen = parent.generation + 1;
      newRole = 'Родитель';
      newX = parent.x + (familyMembers.filter(m => m.generation === newGen).length * 150) - 75;
    } else if (relationship === 'child') {
      newY = parent.y + 120;
      newGen = parent.generation - 1;
      newRole = 'Ребёнок';
      newX = parent.x + (familyMembers.filter(m => m.generation === newGen).length * 150) - 75;
    } else {
      newX = parent.x + 150;
      newRole = 'Супруг(а)';
    }

    const newMember: FamilyMember = {
      id: Date.now().toString(),
      name: 'Новый член семьи',
      role: newRole,
      x: newX,
      y: newY,
      generation: newGen,
    };

    setFamilyMembers([...familyMembers, newMember]);
  };

  if (!showDashboard) {
    return <LandingPage onStartClick={() => setShowDashboard(true)} />;
  }

  return (
    <Dashboard 
      familyMembers={familyMembers}
      selectedMember={selectedMember}
      stats={stats}
      onSelectMember={setSelectedMember}
      onAddMember={addFamilyMember}
    />
  );
}
