import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export interface FamilyMember {
  id: string;
  name: string;
  role: string;
  x: number;
  y: number;
  generation: number;
}

interface FamilyTreeProps {
  familyMembers: FamilyMember[];
  selectedMember: string | null;
  onSelectMember: (id: string) => void;
  onAddMember: (parentId: string, relationship: 'parent' | 'child' | 'spouse') => void;
}

export default function FamilyTree({ familyMembers, selectedMember, onSelectMember, onAddMember }: FamilyTreeProps) {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Интерактивное древо</CardTitle>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Icon name="ZoomIn" size={16} />
            </Button>
            <Button size="sm" variant="outline">
              <Icon name="ZoomOut" size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[500px] bg-accent/10 rounded-lg overflow-hidden border-2 border-dashed border-primary/20">
          <svg className="w-full h-full">
            {familyMembers.map((member, idx) => {
              const parentIndex = idx > 0 ? Math.floor((idx - 1) / 2) : -1;
              if (parentIndex >= 0) {
                const parent = familyMembers[parentIndex];
                return (
                  <line
                    key={`line-${member.id}`}
                    x1={parent.x}
                    y1={parent.y}
                    x2={member.x}
                    y2={member.y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="opacity-50"
                  />
                );
              }
              return null;
            })}
          </svg>

          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="absolute group cursor-pointer"
              style={{
                left: member.x - 60,
                top: member.y - 60,
                width: 120,
              }}
              onClick={() => onSelectMember(member.id)}
            >
              <div className="bg-card border-2 border-primary rounded-xl p-3 hover:shadow-lg transition-all hover:scale-105 hover:border-secondary">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-2 flex items-center justify-center text-white font-bold">
                  {member.name.charAt(0)}
                </div>
                <p className="text-xs font-semibold text-center truncate">{member.name}</p>
                <p className="text-[10px] text-muted-foreground text-center">{member.role}</p>
              </div>
              
              {selectedMember === member.id && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="sm"
                    className="h-6 w-6 p-0 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddMember(member.id, 'parent');
                    }}
                    title="Добавить родителя"
                  >
                    <Icon name="ArrowUp" size={12} />
                  </Button>
                  <Button
                    size="sm"
                    className="h-6 w-6 p-0 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddMember(member.id, 'child');
                    }}
                    title="Добавить ребёнка"
                  >
                    <Icon name="ArrowDown" size={12} />
                  </Button>
                  <Button
                    size="sm"
                    className="h-6 w-6 p-0 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddMember(member.id, 'spouse');
                    }}
                    title="Добавить супруга"
                  >
                    <Icon name="ArrowRight" size={12} />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
